import React,{useState} from "react";
import Task from './task'
function AllTasks()
{
    const [allTasks , SetAllTask] = useState([
        {title : "first",desc:"first task"},
        {title : "second",desc:"second task"},
        {title : "third",desc:"third task"}
    ])
    return(
        <>
        <h1>This is ALl Tasks</h1>
        {
            allTasks.length > 0 ?(
                allTasks.map((item,index)=>(
                    <Task key={index} task={item}></Task>
            ))
            ) : ("no")
        }
    
        </>
    );
}

export default AllTasks