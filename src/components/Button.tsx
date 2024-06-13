import React from "react";
import Alert from "./Alert";
import { MouseEvent, useState } from "react";

interface Props {
  //Children props to pass the text just like HTML buttons
  children: string;
  //adding question mark after shows that this property is optional
  //color?: string;

  //this restricts us to only set the property color to one of the below values
  color?: "primary" | "secondary" | "danger";
  //handle click events on the button through click events
  //not implemented in the button component as its
  //not going to be reusable
  onClick: () => void;
}

//add props parameter and destructure it
//color parameter/value given a default value of primary
const Button = ({ children, color = "danger", onClick }: Props) => {
  //My solution for showing alert message with button click
  //const [showAlert, setShowAlert] = useState(false); //State to control alert visibility

  // const handleButtonClick = () => {
  //   onClick();

  //My Solution - implemented inside actual button component making it not resusable
  //setShowAlert(true);
  // Optionally add other click logic here (e.g., console.log("Button clicked!"))
  //};

  //Render Childern
  return (
    <div>
      {/*Set the OnClick Prop to the function on the html button*/}
      {/*Also passing color in dynamically */}
      <button
        className={"btn btn-" + color}
        data-bs-dismiss="alert"
        onClick={onClick}
      >
        {children}

        {/*showAlert && <Alert>{"My Alert"}</Alert>*/}
      </button>
    </div>
  );
};

export default Button;
