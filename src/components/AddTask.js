import { useState } from "react";
import { Form, Label, FormGroup, Input, Button, Container } from 'reactstrap'
import { toast } from 'react-toastify';
import axios from 'axios';
import CloseButton from "./CloseButton"



function AddTask({setDisplay,FetchData}) {

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
    const url = `https://111arpit1.pythonanywhere.com/taskManager/saveTask`
    const body = { 
      "task_title": title,
      "task_description": desc
      }
    axios.post(url,body)
      .then(response => {
        setDisplay(null); 
        toast.success("Task Added Successfully!!")
        FetchData();
      })
      .catch(error => {
        console.error(error);
      })
  };

  const handleClear = () => {
    setTitle("");
    setDesc("");
  };

  return (
    <>
     
     
      <Container className="col-lg-7 position-relative modal-bg">
        <CloseButton setDisplay={setDisplay}/>
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
