import React, { useState } from "react";
import { Form, Label, FormGroup, Input, Button, Container } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const navigate = useNavigate(); // React Router's useNavigate hook
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleAddTask = () => {
    // Send the data to the database or perform further actions
    console.log("Title:", title);
    console.log("Description:", desc);
    if(title==="" || desc === "")
    {
        toast.error("Fields can't be empty");
        return
    }
    const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`
  

  const payload = {
    "queryload" : `INSERT into arpit_testing.task_manager (title,descr) values('${title}','${desc}')`
    } 
    

    axios.post(url, JSON.stringify(payload))
      .then(response => {
        console.log(response); // Make sure response.data is already a JSON object
         // Delay the redirect by 2 seconds
         setTimeout(() => {
          navigate(`/`); // Redirect to the desired path
        }, 2000);
        toast.success("Task Added Successfully!!")
      })
      .catch(error => {
        console.error(error);
      })


    // Reset the form after adding the task
    setTitle("");
    setDesc("");
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
      <Container className="col-lg-7">
        <h1 className="mb-3">Add your Task</h1>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Task Title</Label>
            <Input
              id="exampleEmail"
              name="text"
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
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
              required
            />
          </FormGroup>

          <Container className="text-center">
            <Button className="add"  onClick={handleAddTask}>
              Add Task
            </Button>
            <Button className="edit-task" onClick={handleClear}>
              Clear
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
}

export default AddTask;
