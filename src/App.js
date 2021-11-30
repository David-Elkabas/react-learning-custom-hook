import UserID from "./components/UserNumber/UserNumber";
import { useState} from "react"
import {useFetchHook} from "./hooks/useFetchHook"
import ShowUserData from "./components/ShowUserData/ShowUserData";

function App() {
  
  const [isSelected, setIsSelected] = useState(true)
  const [userById, setUserById] = useState(null)
  const url ="https://jsonplaceholder.typicode.com/users"
  const [result, error, isLoading] = useFetchHook(url)
  
  const getUserId = (value) =>{
    setIsSelected(false)
    console.log(value, typeof(value))
    setUserById(value)
  }

  if (isLoading || isSelected){ 
    if (isLoading){
      return <h1>loading...</h1>
    }
    else{
    return <UserID getUserId={getUserId}/>
    }
  }else{

  return (
        <div>
          <h1>{userById}</h1>
          { error && <p>Error: {error} </p>};
          { result && 
            result.map(user => {
              if (user.id <= userById) {
                  return(<div key={user.id}>
                    <ShowUserData name ={user.name} email= {user.email} id={user.id} />
                    </div>)
              }
              else{
                return <></>
              }
            })
          }
          
        </div>
        )
      }  
};

export default App;
