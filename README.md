📚 React Project
📌 Project Name

Dev stack bulider website

📝 Description

This is a React-based web application built to practice and demonstrate React fundamentals. The project loads JSON data, displays it dynamically, and allows users to interact with the data.

🛠️ Technologies Used
React.js
TypeScript
JavaScript
HTML
CSS
Tailwind CSS
JSON
✨ Features
Dynamic Data Display
Data is loaded from a JSON file and displayed dynamically.
Interactive UI
Users can interact with different elements of the application.
Responsive Design
The application works well on desktop and mobile devices.
❓ React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make UI code easier to write and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.
State is used to store and manage data inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and update state in a React component. I used it to store and manage changing data such as user interactions and UI values.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. I used it to load the JSON data when the component starts.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React efficiently update the correct item when the data changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, if there are no items in the stack:

{stack.length === 0 && (
  <p>No items in the stack.</p>
)}

Here, the message is shown only when the stack is empty.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

The child can send data back to the parent by calling a function passed through props.

Example:

function Parent() {
  const handleData = (data) => {
    console.log(data);
  };

  return <Child sendData={handleData} />;
}
function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent")}>
      Send
    </button>
  );
}
