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
    default:
      return state
  }
}