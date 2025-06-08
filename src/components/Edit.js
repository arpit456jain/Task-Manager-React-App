import React, { useEffect, useState } from "react";
import Header from './Header';
import { Form, Label, FormGroup, Input, Button, Container } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function EditTask() {
const navigate = useNavigate(); // React Router's useNavigate hook
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  

  
  useEffect(()=>{
    const queryParameters_new = new URLSearchParams(window.location.search);
    const task_id = queryParameters_new.get("id");
    const url = `https://111arpit1.pythonanywhere.com/taskManager/task/${task_id}`
          axios.get(url).then(response => { 
            console.log("id exists",response)
            setDesc(response.data.task_description)
            setTitle(response.data.task_title)
            })
            .catch(error => {
              console.error(error);
              
            })
  },[])


 
 

  const handleEditTask = () => {
    // Send the data to the database or perform further actions
    const queryParameters_new = new URLSearchParams(window.location.search);
    const id_from_url = queryParameters_new.get("id");
    const url = `https://111arpit1.pythonanywhere.com/taskManager/saveTask`
  

  const body = {
    "task_id" : id_from_url, 
    "task_title": title,
    "task_description": desc
    }
    axios.put(url, body)
      .then(response => {
        
        toast.success("Task Edited Successfully!!");
        //  Delay the redirect by 2 seconds
         setTimeout(() => {
            navigate(`/`); 
          }, 2000);
      })
      .catch(error => {
        console.error(error);
      })
  };

  const handleClear = () => {
    // Clear the form inputs
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <Container className="col-lg-7">
        <h1 className="mb-3">Edit your Task</h1>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Task Title</Label>
            <Input
              id="exampleEmail"
              name="text"
              type="text"
              value={title}
              onChange={(e)=>(setTitle(e.target.value))}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Task Description</Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              value={desc}
              onChange={(e)=>(setDesc(e.target.value))}
            />
          </FormGroup>

          <Container className="text-center">
            <Button className="mx-1" color="success" onClick={handleEditTask}>
              Edit Task
            </Button>
            <Button className="mx-1" color="warning" onClick={handleClear}>
              Clear
            </Button>
          </Container>
        </Form>
      </Container>
      </>
  );
}

export default EditTask;
