import React from "react";
import "./style.css";
// import { Button } from 'reactstrap';

function DeleteBtn(props) {
    return (
      <span className="delete-btn" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }
  
  export default DeleteBtn;
  