import React,{useEffect, useState} from "react";
import Task from './task'
import Header from './Header';
import axios from "axios";
import {Container} from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import AddTask from "./AddTask";
import EditTask from "./Edit";
import Footer from "./Footer";

function AllTasks()
{
    const [allTasks , SetAllTask] = useState([])
    const [display ,setDisplay] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null); // for edit

    useEffect(() => {
        FetchData();
      },[]);


      function FetchData(){
        const url = `https://111arpit1.pythonanywhere.com/taskManager/task`  
          axios.get(url)
            .then(response => {
              SetAllTask(response.data);
            })
            .catch(error => {
              console.error(error);
            })
      
    }
    
    return(
        <>
        <ToastContainer/>
        <Header setDisplay={setDisplay} title="TaskManager"/>
        <div>
          {display === 'add' ? <AddTask setDisplay={setDisplay} FetchData={FetchData}/> : display === 'edit' ? <EditTask setDisplay={setDisplay} FetchData={FetchData} task={selectedTask} /> : ""}
        </div>
         
        <h1 className="text-center mt-3">ALL Tasks</h1>
        <Container className="">
        <div className="row">
        {
            allTasks?.length > 0 ?(
                allTasks?.map((item,index)=>(
                    <div className="col-lg-4">  
                      <Task setDisplay={setDisplay} setSelectedTask={setSelectedTask} key={item.id} task={item} FetchData={FetchData}></Task>
                    </div>
            ))
            ) : (<h1>No Tasks yet , please add a new one...</h1>)
        }
        </div>

    </Container>

    <Footer display={display}/>
        </>
    );
}

export default AllTasks