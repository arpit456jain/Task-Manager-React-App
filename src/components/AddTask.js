import React, { useState } from "react";
import { Form, Label, FormGroup, Input, Button, Container } from 'reactstrap'

function AddTask() {
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
      <Container>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Task Title</Label>
            <Input
              id="exampleEmail"
              name="text"
              type="text"
              value={title}
              onChange={handleTitleChange}
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
            />
          </FormGroup>

          <Container className="text-center">
            <Button className="mx-1" color="success" onClick={handleAddTask}>
              Add Task
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

export default AddTask;
