import settings from 'electron-settings'

let initialState = {
  panes: [
    { title: 'Tab 1', content: 'SplitLayout', key: '1', closable: false },
    { title: 'Tab 2', content: 'MessageListAndContent', key: '2' },
    { title: 'Tab 3', content: 'MessageListAndContent', key: '3' }
  ],
  navItems: [
    { key: 'Live', title: '实时', iconType: 'pie-chart'},
    { key: 'Zhutiku', title: '主题库', iconType: 'desktop'},
    { key: 'Ban', title: '打板神器', iconType: 'inbox'},
  ],
  activeKey: '1',
  dsa: '123'
}

if(settings.has('tabs')) {
  initialState = Object.assign(initialState, settings.get('tabs'))
}

export default function tabs(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TAB': {
      const { content, key, title } = action.payload
      const tabExist = !!state.panes.filter(i => i.key === key).length
      const panes = !tabExist ? {
        panes: [...state.panes, { title, content, key }]
      } : {}
      const newState = {
        ...state,
        ...panes,
        activeKey: key
      }
      settings.set('tabs', newState)
      return newState
    }      
    case 'SELECT_NAV': {
      return {
        ...state, 
        activeKey: action.payload.selectedKeys
      }
    }
    case 'SET_TABS_ACTIVE_KEY': {
      const newState = {
        ...state, 
        activeKey: action.payload.activeKey
      }
      settings.set('tabs', newState)
      return newState
    }
    case 'REMOVE_TAB': {
      let activeKey = state.activeKey;
      let lastIndex;
      const targetKey = action.payload.targetKey
      state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = state.panes.filter(pane => pane.key !== targetKey);
      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }
      const newState = {
        ...state,
        panes, 
        activeKey
      }
      settings.set('tabs', newState)
      return newState
    }      
    default:
      return state
  }
}

export { 
  initialState
}