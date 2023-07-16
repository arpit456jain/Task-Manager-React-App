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
  const [taskExist , setTaskExist] = useState(true);
  const [loading, setLoading] = useState(true); // Add loading state

  
  useEffect(()=>{
    const queryParameters_new = new URLSearchParams(window.location.search);
    const id_from_url = queryParameters_new.get("id");
    const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`
      
        const payload = {
          "queryload" : `select * from arpit_testing.task_manager where id = ${id_from_url};`
          } 
          console.log(id_from_url);
          axios.post(url, JSON.stringify(payload))
            .then(response => {
              console.log(response.data); // Make sure response.data is already a JSON object
            if(response.data.length>=1)
            {
              console.log("id exists")
              setTitle(response.data[0].title);
              setDesc(response.data[0].descr);
            }
            else
            {
              console.log("id not exists")
              setTaskExist(false);
            }
            setLoading(false); // Update loading state when the response is received
            })
            .catch(error => {
              console.error(error);
              setLoading(false); // Update loading state when an error occurs
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
    const queryParameters_new = new URLSearchParams(window.location.search);
    const id_from_url = queryParameters_new.get("id");
    const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`
  

  const payload = {
    "queryload" : `update arpit_testing.task_manager set title='${title}', descr='${desc}' where id=${id_from_url};`
    } 
    

    axios.post(url, JSON.stringify(payload))
      .then(response => {
        console.log(response); // Make sure response.data is already a JSON object
        toast.success("Task Edited Successfully!!");
        //  Delay the redirect by 2 seconds
         setTimeout(() => {
            navigate(`/`); // Redirect to the desired path
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
     <Header title="Task Manager" />
     {loading ? (
        <p>Loading...</p> // Render a loading indicator while waiting for the response
      ) : (
     <>
     {!taskExist ? `There is no task present with this id ${taskExist}`  : 
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
      )}
    </>
  );
}

export default EditTask;
