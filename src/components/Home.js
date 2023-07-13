import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { ToastContainer, toast } from 'react-toastify';
function Home()
{
    const notify = () => {
        toast("Wow so easy !")
        toast.success("success ")
      };
    return(
        <>
           <ToastContainer/>
        <div> This is home</div>
        <Button color="warning" onClick={notify}>
    warning
  </Button>
        </>
    );
}

export default Home
