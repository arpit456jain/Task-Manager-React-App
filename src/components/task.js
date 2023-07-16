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
    console.log("delete is clicked", id);
    const url = `https://8tdgrcf0cc.execute-api.ap-south-1.amazonaws.com/default/z-alpha_api`;

    const payload = {
      queryload: `delete from arpit_testing.task_manager where id=${id};`,
    };

    axios
      .post(url, JSON.stringify(payload))
      .then((response) => {
        console.log(response); // Make sure response.data is already a JSON object
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
      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">{task.title}</CardTitle>
          <CardText>{task.descr}</CardText>
          <Button color="warning" style={{ margin: "5px" }} onClick={()=>HandleEditTask(task.id)}>
            Edit
          </Button>
          <Button color="danger" onClick={() => HandleDelete(task.id)}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default Task;
