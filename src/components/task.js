import React from "react";
import {Card,CardBody,CardTitle,CardText,Button}  from 'reactstrap'
function Task({task})
{
    return(
        <>
<Card className="my-2">   
  <CardBody>
    <CardTitle tag="h5">
      {task.title}
    </CardTitle>
    <CardText>
      {task.desc}
    </CardText>
    <Button color="warning" style={{margin:"10px"}}>
      Edit
    </Button>
    <Button color="danger">
      Delete
    </Button>
  </CardBody>
</Card>
        </>
    );
}

export default Task