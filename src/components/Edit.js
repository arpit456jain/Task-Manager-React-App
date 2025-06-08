import { useEffect, useState } from "react";
import { Form, Label, FormGroup, Input, Button, Container } from 'reactstrap'
import {toast } from 'react-toastify';
import CloseButton from "./CloseButton"
import axios from 'axios';


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
  
  // useEffect(()=>{
  //   const task_id = task.task_id
  //   const url = `https://111arpit1.pythonanywhere.com/taskManager/task/${task_id}`
  //         axios.get(url).then(response => { 
  //           console.log("id exists",response)
  //           setDesc(response.data.task_description)
  //           setTitle(response.data.task_title)
  //           })
  //           .catch(error => {
  //             console.error(error);
              
  //           })
  // },[])


 
 

  const handleEditTask = () => {
    console.log("save",task)
    const url = `https://111arpit1.pythonanywhere.com/taskManager/saveTask`
    const body = {
      "task_id" : id, 
      "task_title": title,
      "task_description": desc
      }
      console.log("body",body)
    axios.put(url, body)
      .then(response => {
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
  };

  return (
    <>
      <Container className="col-lg-7 position-relative modal-bg">
        <CloseButton setDisplay={setDisplay}/>
        <h1 className="mb-1">Edit your Task</h1>
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
