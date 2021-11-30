import {useFetchHook} from "../../hooks/useFetchHook"

const TasksToShow = (props) => {

    const {id} = props
    const url =`https://jsonplaceholder.typicode.com/todos/?userId=${id}`
    const [result, error, isLoading] = useFetchHook(url)
   
  if (isLoading){ 
      return <h1>loading...</h1>
    }else{
    return (
            <div>
            
            { error && <p>Error: {error} </p>};
            { result && 
                result.map((task, index) => {
                if (index <= 2) {
                    return(<ul key={index}>
                        <li>{task.title}</li>
                        </ul>)
                }
                else{
                    return <></>
                }
                })
            }
            
            </div>
            )
      } 
    }
 
export default TasksToShow;