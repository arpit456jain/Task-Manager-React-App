import React from "react";
import {Card,CardBody,CardTitle,CardText,Button}  from 'reactstrap'
function Task({task})
{
    return(
        <>
<Card
  style={{
    width: '18rem'
  }}
>   
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