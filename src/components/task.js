import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Task({ task, FetchData }) {
  const navigate = useNavigate(); // React Router's useNavigate hook

  function HandleEditTask(id){
    navigate(`/edit?id=${id}`); // Redirect to the desired path
  }

  function HandleDelete(id) {
    const url = `https://111arpit1.pythonanywhere.com/taskManager/deleteTask/${id}`;
    axios.delete(url).then((response) => {
        FetchData();
        toast.success("Task Deleted Successfully!!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <ToastContainer />
      
      <Card className="my-2 card-color">
        <CardBody>
          <CardTitle tag="h5">{task.task_title}</CardTitle>
          <CardText>{task.task_description}</CardText>
          <Button color="warning" style={{ margin: "5px" }} onClick={()=>HandleEditTask(task.task_id)}>
            Edit
          </Button>
          <Button color="danger" onClick={() => HandleDelete(task.task_id)}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default Task;
