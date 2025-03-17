import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginvideo from "../image/login.mp4";
import Header from "./Header";
import Bottom from "./Footer";

export function Login() {
  return (
    <>
    <Header/>
    <div className="container-fluid vh-100 d-flex align-items-center bg-dark text-white">
      <div className="row w-100 px-5">
        
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <video width="100%" height="auto" autoPlay loop muted className="rounded shadow">
            <source src={loginvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

       
        <div className="col-md-5 d-flex flex-column justify-content-center">
          <h2 className="text-center mb-4">Login</h2>
          
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 text-dark color-white">
            <Form.Control type="email" placeholder="name@example.com" className="bg-dark text-white border-secondary"/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 text-dark color-white">
            <Form.Control type="password" placeholder="Password" className="bg-dark text-white border-secondary"/>
          </FloatingLabel>

          <Button variant="light" className="w-100">Login</Button>
        </div>
      </div>
    </div>
    <Bottom/>
    </>
  );
}
