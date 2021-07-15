import "./Button.css";
function Button(props) {
  return (
    <div>
      <button type="button">{props.name}</button>
    </div>
  );
}
export default Button;
