import React,{useEffect, useState} from "react";
import Task from './task'
import axios from "axios";
import {Container} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

function AllTasks()
{
    const [allTasks , SetAllTask] = useState([
    ])

    useEffect(() => {
        FetchData();
        toast.success("All Tasks Fetched successfully!!")
      },[]);


      function FetchData(){
        const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`
      
        const payload = {
          "queryload" : `select * from arpit_testing.task_manager;`
          } 
          
          axios.post(url, JSON.stringify(payload))
            .then(response => {
              console.log(response.data); // Make sure response.data is already a JSON object
              SetAllTask(response.data);
            })
            .catch(error => {
              console.error(error);
            })
      
    }
    
    return(
        <>
         <ToastContainer/>
        <h1 className="text-center mt-3">ALL Tasks</h1>
        <Container className="p-2">
        <div className="row">
        {
            allTasks.length > 0 ?(
                allTasks.map((item,index)=>(
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