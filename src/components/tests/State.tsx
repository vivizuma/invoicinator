import { useState } from "react";

function Greeting(props) {
  return <div>{props.isGreeting ? <div>Hello</div> : <div>Goodbye.</div>}</div>;
}

function SideBarContent() {
  const [isGreeting, setIsGreeting] = useState(true);
  function toggleGreeting() {
    setIsGreeting((prevIsGreeting) => !prevIsGreeting);
  }
  return (
    <div>
      <button className="bg-slate-200" onClick={toggleGreeting}>
        Toggle
      </button>
      <Greeting isGreeting={isGreeting} />
    </div>
  );
}

export default SideBarContent;
