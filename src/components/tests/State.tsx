import React from "react";

function Greeting(props) {
  return <div>{props.isGreeting ? <div>Hello</div> : <div>Goodbye</div>}</div>;
}


function GreetingComponent(){
    const isGreeting = true 
    return(
        <div>
            <h1>My Component Example</h1>
            <Greeting isGreeting = {isGreeting}
        </div>
    )
}

