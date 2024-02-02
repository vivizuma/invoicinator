function AspectRatioContainer({ children }) {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="grid place-items-center aspect-[3/4]">{children}</div>
      </div>
    </>
  );
}

export default AspectRatioContainer;
