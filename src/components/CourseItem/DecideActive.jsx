const DecideActive = (Component, newcolor) => {
  return function BackColor(props) {
    return (
      <div style={{ backgroundColor: newcolor }}>
        <Component {...props} />
      </div>
    );
  };
};

export default DecideActive;
