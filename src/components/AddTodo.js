import React, {useRef} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {createTodo} from '../api'

const AddTodo = () => {

  const inputRef = useRef()
  const queryCache = useQueryClient()

  const mutation = useMutation(newTodo => createTodo(newTodo), {
    onSuccess: () => queryCache.invalidateQueries('todos')
  });

  const addTodoHandler = () => {
    mutation.mutate({TODO: inputRef.current.value})
    inputRef.current.value = ''
  }

  return (<div> {
    mutation.isLoading ? ('Adding todo...') : (<> {
      mutation.isError ? (<div>An error occurred: {
        mutation.error.message
      }</div>) : null
    }

      {
      mutation.isSuccess ? <div>Todo added!</div> : null
    }


      <input ref={inputRef}
        type="text"/>
      <button onClick={addTodoHandler}>Add Todo</button>
      <hr/>
    </>)
  } </div>)
}

export default AddTodo
