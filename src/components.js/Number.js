const Number = ({ number, actionOnClick }) => {
  return (
    <div className="numero" onClick={actionOnClick}>
      <p>{number}</p>
    </div>
  );
};

export default Number;
