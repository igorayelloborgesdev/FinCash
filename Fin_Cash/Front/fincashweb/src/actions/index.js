
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export function postModalCall() { 
  console.log('POST_SUCCESS');
  return{
    type: 'POST_SUCCESS',
    obj: {}
  }
}

export function postlogin(param1, param2) {   

  window.location.href = '/';    
  return{
    type: 'LOG_SUCCESS',
    obj: {}
  }
}

// export function handleSelect() {   
//   const handleSelect = eventKey => alert(`selected ${eventKey}`);
// }