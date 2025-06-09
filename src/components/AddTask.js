import { useState } from "react";
import { Form, Label, FormGroup, Input, Button, Container } from 'reactstrap'
import { toast } from 'react-toastify';
import CloseButton from "./CloseButton"
import { addTask } from "../RestApis";


function AddTask({setDisplay,FetchData}) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddTask = () => {
   
    if(title==="" || desc === "")
    {
        toast.error("Fields can't be empty");
        return
    }
    
    const body = { 
      "task_title": title,
      "task_description": desc
      }
      addTask(body)
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
    toast.success("Fields Cleared Successfully!!")
  };

  return (
    <>
     
     
      <Container className="col-lg-7 position-relative modal-bg">
        <CloseButton setDisplay={setDisplay}/>
        <h1 className="mb-3">Add your Task</h1>
        
        <Form>
          
          <FormGroup>
            <Label for="taskTitle">Task Title</Label>
            <Input
              id="taskTitle"
              name="task_title"
              type="text"
              value={title}
              onChange={(e)=>(setTitle(e.target.value))}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="taskDescription">Task Description</Label>
            <Input
              id="taskDescription"
              name="task_description"
              type="textarea"
              value={desc}
              onChange={(e)=>(setDesc(e.target.value))}
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
