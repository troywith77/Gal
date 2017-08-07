import settings from 'electron-settings'

const navItems = [
  { key: 'Live', title: '实时', iconType: 'pie-chart'},
  { key: 'Zhutiku', title: '主题库', iconType: 'desktop'},
  { key: 'Ban', title: '打板神器', iconType: 'inbox'},
]

let initialState = {
  selectedKeys: ['Live'],
  items: navItems
}

if(settings.has('tabs')) {
  initialState.selectedKeys = [settings.get('tabs').activeKey]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_NAV': {
      return {
        ...state, 
        selectedKeys: [action.payload.selectedKeys]
      }
    }
    case 'ADD_TAB': {
      return {
        ...state,
        selectedKeys: [action.payload.key]
      }
    }
    case 'SET_TABS_ACTIVE_KEY': {
      return {
        ...state,
        selectedKeys: [action.payload.activeKey]
      }
    }
    default:
      return state
  }
}