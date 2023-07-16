import React, { useEffect, useState } from "react";
import { Form, Label, FormGroup, Input, Button, Container } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const queryParameters = new URLSearchParams(window.location.search);
const id = queryParameters.get("id");
function EditTask() {
const navigate = useNavigate(); // React Router's useNavigate hook
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [taskExist , setTaskExist] = useState(false);

  
  useEffect(()=>{
    
    const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`
      
        const payload = {
          "queryload" : `select * from arpit_testing.task_manager where id = ${id};`
          } 
          
          axios.post(url, JSON.stringify(payload))
            .then(response => {
            //   console.log(response.data[0]); // Make sure response.data is already a JSON object
            if(response.data.length>=1)
            {
                setTitle(response.data[0].title);
              setDesc(response.data[0].descr)
              setTaskExist(true);
            }
              
            })
            .catch(error => {
              console.error(error);
            })
  },[])


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleEditTask = () => {
    // Send the data to the database or perform further actions
    console.log("Title:", title);
    console.log("Description:", desc);
    const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`
  

  const payload = {
    "queryload" : `update arpit_testing.task_manager set title='${title}', descr='${desc}' where id=${id};`
    } 
    

    axios.post(url, JSON.stringify(payload))
      .then(response => {
        console.log(response); // Make sure response.data is already a JSON object
        toast.success("Task Edited Successfully!!");
        //  Delay the redirect by 2 seconds
         setTimeout(() => {
            navigate(`/allTasks`); // Redirect to the desired path
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
     <ToastContainer/>
     {!taskExist ? "There is no task present with this id" : 
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
              onChange={handleTitleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Task Description</Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              value={desc}
              onChange={handleDescChange}
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
      }
    </>
  );
}

export default EditTask;
