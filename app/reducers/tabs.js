const initialState = {
  panes: [
    { title: 'Tab 1', content: 'SplitLayout', key: '1', closable: false },
    { title: 'Tab 2', content: 'MessageListAndContent', key: '2' },
    { title: 'Tab 3', content: 'MessageListAndContent', key: '3' }
  ],
  activeKey: ''
}

export default function tabs(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TAB': 
      return {
        panes: [...state.panes, {title: 'TAB $', content: 'MessageListAndContent', key: '4'}]
      }
    case 'POP_TAB': 
      const panes = [...state.panes]
      panes.pop()
      return {
        panes
      }
    default:
      return state
  }
}