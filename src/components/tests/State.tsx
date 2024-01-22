function Greeting() {
  return <>Hekkis</>;
}
function SideBarContent() {
  const isGreeting = true;
  return (
    <div>
      <h1>My Component Example</h1>
      <Greeting />
    </div>
  );
}

export default SideBarContent;
