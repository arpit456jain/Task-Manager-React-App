import React,{useEffect, useState} from "react";
import Task from './task'
import Header from './Header';
import axios from "axios";
import {Container} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

function AllTasks()
{
    const [allTasks , SetAllTask] = useState([])

    useEffect(() => {
        FetchData();
      },[]);


      function FetchData(){
        const url = `https://111arpit1.pythonanywhere.com/taskManager/task`  
          axios.get(url)
            .then(response => {
              SetAllTask(response.data);
              toast.success("All Tasks Fetched successfully1!!")
            })
            .catch(error => {
              console.error(error);
            })
      
    }
    
    return(
        <>
         <Header title="Task Manager" />
        <h1 className="text-center mt-3">ALL Tasks</h1>
        <Container className="">
        <div className="row">
        {
            allTasks?.length > 0 ?(
                allTasks?.map((item,index)=>(
                    <div className="col-lg-4">  
                      <Task key={item.id} task={item} FetchData={FetchData}></Task>
                    </div>
            ))
            ) : (<h1>No Tasks yet , please add a new one...</h1>)
        }
        </div>

    </Container>
        </>
    );
}

export default AllTasks