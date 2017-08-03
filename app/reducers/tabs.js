const initialState = {
  panes: [
    { title: 'Tab 1', content: 'SplitLayout', key: '1', closable: false },
    { title: 'Tab 2', content: 'MessageListAndContent', key: '2' },
    { title: 'Tab 3', content: 'MessageListAndContent', key: '3' }
  ],
  activeKey: '1',
  dsa: '123'
}

export default function tabs(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TAB': {
      const activeKey = String(Math.random())
      return {
        ...state,
        activeKey,
        panes: [...state.panes, {title: 'TAB $', content: 'MessageListAndContent', key: activeKey}]
      }
    }      
    case 'POP_TAB': {
      const panes = [...state.panes]
      panes.pop()
      return {
        ...state,
        panes
      }
    }
    case 'SET_TABS_ACTIVE_KEY': {
      return {
        ...state, 
        activeKey: action.payload.activeKey
      }
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
      return {
        ...state,
        panes, 
        activeKey
      }
    }      
    default:
      return state
  }
}

export { 
  initialState
}