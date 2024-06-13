//by passing children as a prop - we make Alert dynamic

import { ReactNode } from "react";

//through an interface
interface Props {
  //text: string;

  //by renaming text to children (a special prop that all compnents support)
  // - we can pass our text as a child to this component
  //children: string;

  //change children type to more complex structure that can support html
  //can use Hello <span>World</span> inside <Alert> instead of text value
  children?: ReactNode;

  //to close the alert
  onClose: () => void;
}

//{children}: Props destructure the Props interface and grab the children property
const Alert = ({ children, onClose }: Props) => {
  return (
    //bootstrap mark up needed to render alert
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
