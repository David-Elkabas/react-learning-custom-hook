import { useState } from "react";

import TasksToShow from "../TasksToShow/TasksToShow";


const ShowUserData = (props) => {

    const {name, email, id} = props
    const [isTaskLoading, setIsTaskLoading] = useState(false)

   
    const fetchTasksData = () =>{
        setIsTaskLoading(!isTaskLoading)

    }
    return ( 
        <div>
            <p>name: {name}.<br/> email: {email}</p>
            <button onClick={fetchTasksData}>Tasks</button>
            {isTaskLoading && <TasksToShow id={id} /> }
            <hr/>
            
        </div>
     );
}
 
export default ShowUserData;