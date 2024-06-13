import { MouseEvent, useState } from "react";

//can use interface to define the shape or interface of an object
//e.g., if we want to show cities or heights
interface Props {
  //define various properties & their types
  items: string[];
  heading: string;

  //this implements functionality so that something happens after an item is selected
  //what happens is different from one application to the other
  // - so we dont want to implement that logic inside our list group component
  //  - then it wont be a reusable component any more
  //    - we use the below to notify the parent of ListGroup (which is App) that an item is selected

  //therefore we used the Props object which is used to pass data to our ListGroup component
  //(the property we use for this will be a function)
  //we want a function that takes the parameter of type string (the selected item) and returns type void - add it as a third property
  onSelectItem: (item: string) => void;
}

//destructure props interface into 3 paramenters items, heading & onSelectItem -> so we have access to them anywhere in the function (dont have to specify props.items)
function ListGroup({ items, heading, onSelectItem }: Props) {
  //let defines a variable (can reassign) - can make constant by using key word const
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];

  //variable to keep track of index of selected item
  //let selectedIndex = 0;
  // this is a Hook - allows us to tap into built in features in react
  // tells react that this function will have data or state that will change over time

  //const arr = useState(-1);
  //arr[0]; //first element is a variable like selectedIndex
  //arr[1]; //second element is an updater function > can use this to update our function > react is then notified that the state of our element has changed > it will then re-render our component > this causes the DOM to be updated

  //instead of working with 2 individual element arr[0] & arr[1] above - easier to destructure the array into two elements

  const [selectedIndex, setSelectedIndex] = useState(-1); //index update in onClick using setSelectedIndex method
  //using state hook to declare another variable called name

  //const [name, setName] = useState(''); //initialize name to an empty string which we can destructure into two elements

  //const message = items;

  //rendering different content based on certain conditions
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   );

  //above if statement uses duplication - below has not duplication
  //by rendering conditionally inside the jsx expression
  //{items.length === 0 ? <p>No item found</p> : null}

  //instead of using the condition shown above in jsx exp
  //we can store condition in a const as shown below
  const message = items.length === 0 ? <p>No item found</p> : null;

  //moving logic inside a get message
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  //more concise way to get the same logic
  //instead of using the ternary operator/ question mark
  //- we do a logical and between condition and value returned if cond true

  //with below statement if items.length === 0 -- true > <p>No item found</p> returned
  //else nothing returned

  //items.length === 0 && <p>No item found</p>

  //typescript compiler doesnt know the type of parameter event is
  //because we are not using the statement inline
  //therefore need to specify the type of parameter so that we get auto completion and type safety

  //this function is called an event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* items.length === 0 ? <p>No item found</p> : null*/}
      {/*getMessage()*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* takes each item and converts it to an item of a different type */}
        {/* converts each item into a <li> element*/}
        {/* because we jsx does not have for loops*/}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
