const initialState = {
  selectedKeys: ['Live']
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_NAV': {
      return {
        ...state, 
        selectedKeys: [action.payload.selectedKeys]
      }
    }
    default:
      return state
  }
}