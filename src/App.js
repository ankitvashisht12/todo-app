import React from "react";
import {useInfiniteQuery} from "react-query";
import {FetchTodos} from "./api";
import AddTodo from "./components/AddTodo";


function App() {
  const {
    data,
    // status,
    error,
    isLoading,
    isError,
    // canFetchMore,
    // fetchMore,
    // isFetchingMore,
    isFetching,
    // isFetched,
    fetchNextPage,
    hasNextPage

  } = useInfiniteQuery("todos", FetchTodos, {
    getNextPageParam: (lastPage) => {
      console.log('Last Page : ', lastPage.data.offset)
      return lastPage.data.offset
    }
  });
  console.log(data);

  if (isLoading) 
    return (<p>
      Loading ...</p>)
  
  if (isError) 
    return (<p> {error} </p>)
  
  console.log(data);


  return (<div>
    <AddTodo/>
    <ul> {
      data.pages.map((group, idx) => {
        return <React.Fragment key={idx}> {
          group.data.records.map(rec => {
            return <li key={
              rec.id
            }> {
              rec.fields.TODO
            }</li>
        })
        }</React.Fragment>
    })
    }</ul>
    <div>
      <button onClick={
          () => fetchNextPage()
        }
        disabled={
          !hasNextPage || isFetching
      }> {
        isFetching ? 'Loading More..' : hasNextPage ? 'Load More' : "Nothing to load"
      }</button>
    </div>
  </div>);
}


export default App;
