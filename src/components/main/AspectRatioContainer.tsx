function AspectRatioContainer({ children }) {
  return (
    <>
      <div className="grid place-items-center aspect-[3/4]">{children}</div>
    </>
  );
}

export default AspectRatioContainer;
