
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { toast } from "react-toastify";
import {deleteTask} from "../RestApis"


function Task({ task, FetchData ,setDisplay,setSelectedTask}) {
  
  function HandleEditTask(){
    setDisplay('edit')
    setSelectedTask(task);
  }

  function HandleDelete(id) {
    deleteTask(id).then((response) => {
        FetchData();
        toast.success("Task Deleted Successfully!!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <> 
      <Card className="my-2 card-color">
        <CardBody>
          <CardTitle tag="h5">{task.task_title}</CardTitle>
          <CardText>{task.task_description}</CardText>
          <Button color="warning" style={{ margin: "5px" }} onClick={()=>HandleEditTask()}>
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
