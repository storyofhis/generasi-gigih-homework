import "./input.css";
import Button from "./Button";

function Input() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" id="#inputTitle" />
        <br />
        <textarea name="comment" form="usrform" placeholder="Enter the Description here..." wrap="off" cols="30" rows="5" />
      </form>
      <Button>Search</Button>
    </div>
  );
}

export default Input;
