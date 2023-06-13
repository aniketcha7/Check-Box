import {Components} from "react-select";
const Checkbox = (props) => {
  const { CheckValue, chChecked, readOnly ,Selected } = props;
  console.log(CheckValue);
  return (
    <label class="dropdown-option">
      <input
        type="checkbox"
        disabled={readOnly}
        checked={chChecked}
        name="dropdown-group"
        value={CheckValue}
      />
      {CheckValue}
    </label>
   
    
  );
};

export default Checkbox;
