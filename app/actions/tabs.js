export function ADD_TAB(content = 'SplitLayout', key = String(Math.random()), title = 'TAB $') {
  return {
    type: 'ADD_TAB',
    payload: {
      content, 
      key,
      title
    }
  }
}

export function POP_TAB() {
  return {
    type: 'POP_TAB'
  }
}

export function SET_TABS_ACTIVE_KEY(activeKey) {
  return {
    type: 'SET_TABS_ACTIVE_KEY',
    payload: {
      activeKey
    }
  }
}

export function REMOVE_TAB(targetKey) {
  return {
    type: 'REMOVE_TAB',
    payload: {
      targetKey
    }
  }
}