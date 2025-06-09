import { useEffect, useState } from "react";
import { Form, Label, FormGroup, Input, Button, Container } from 'reactstrap'
import {toast } from 'react-toastify';
import CloseButton from "./CloseButton"
import { editTask } from "../RestApis";


function EditTask({setDisplay,task,FetchData}) {
  const [id,setId] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  useEffect(() => {
    if (task) {
      setTitle(task.task_title);
      setDesc(task.task_description);
      setId(task.task_id)
    }
  }, [task]);
  
  const handleEditTask = () => {
    const body = {
      "task_id" : id, 
      "task_title": title,
      "task_description": desc
      }
      editTask(body).then(response => {
        setDisplay(null)
        FetchData()
        toast.success("Task Edited Successfully!!");
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
        <CloseButton setDisplay={setDisplay} />
        <h1 className="mb-1">Edit your Task</h1>
        <Form>
          <FormGroup>
            <Label for="taskTitle">Task Title</Label>
            <Input
              id="taskTitle"
              name="task_title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="taskDescription">Task Description</Label>
            <Input
              id="taskDescription"
              name="task_description"
              type="textarea"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </FormGroup>

          <Container className="text-center">
            <Button className="mx-1" color="success" onClick={handleEditTask}>
              Save
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
