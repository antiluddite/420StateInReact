import React from "react";

//Declarative Programming
// We're declaring
// when we're writing our code how our user
// interface should look under different conditions dependent
// upon the state.

// function App() {

//   var isDone = false;
//   const strikeThrough = {textDecoration: "line-through"}

//   return <p style={isDone ? strikeThrough : null}>Buy milk</p>
// }

// function strike() {
//  document.getElementById("root").style.textDecoration = "line-through"
// }

// function unStrike() {
//   document.getElementById("root").style.textDecoration = null
//  }

// function App() {
//   return(
//     <div>
//       <p>Buy milk</p>
//       <button onClick={strike}
//        >Change to strike through</button>
//        <button onClick={unStrike}
//        >Change back</button>
//     </div>
//   )
// }

// export default App;

// The other style of programming would be called
//imperative programming.
// And this is what we've been doing all along
// using Javascript. When we say document.getElementById

//document.getElementById("root").style.textDecoration = "line-through"

//and then we tap into its properties and then
// we set it equal to something,
// this is us imperative early telling this element
//to do something different.
// And you can achieve exactly the same results.

//This will not work
// Now if we instead go back to our previous declarative
// style of code where we were tracking that variable
// isDone, then instead of having to get the element and
// update its properties, you can simply change is
// Done to true or is done to false.
// But even though you might think this code should
// theoretically work, it doesn't.
// And the reason is because these elements are being
// rendered and they are not changeable.
// They have to be re-rendered onto the screen in order
// for the changes in their properties, such as their
// style property, to be seen. And to do that .... con't

var isDone = false;
function strike() {
  isDone = true;
}
function unStrike() {
  isDone = false;
}
function App() {
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;

//  ... con't we have to learn about something called hooks.
//  Hooks is a relatively new React concept but it's a really
// powerful one.
// Effectively they are functions that allow us to hook
// into the state of our app and read or modify it.

//420. State in React - Declarative vs. Imperative Programming
