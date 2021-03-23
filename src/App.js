import {useQuery} from "react-query";
import {FetchTodos} from "./api";


function App() {
  const {
    data,
    // status,
    error,
    isLoading,
    isError
  } = useQuery("todos", FetchTodos);
  console.log(data);

  if (isLoading) 
    return (<p>
      Loading ...</p>)


  


  if (isError) 
    return (<p> {error} </p>)


  


  return (<div>
    <ul> {
      data.data.records.map(rec => {
        return <li key={
          rec.id
        }> {
          rec.fields.TODO
        }</li>
    })
    }</ul>
  </div>);
}


export default App;
