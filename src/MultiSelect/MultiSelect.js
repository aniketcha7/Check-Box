import { useRef, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./MultiSelect.css";
const MultiSelect = (props) => {

  const { allOption } = props;
  
  const dropdownRef = useRef();
  
  const onClickDropDown = () => {
  
    if (dropdownRef.current) {

      if (dropdownRef.current.className.includes("on")) {
        dropdownRef.current.className = "dropdown";
      } 
      else {
        dropdownRef.current.className = dropdownRef.current.className + " on";
      }
    }
  };

  const allCheckbox = allOption?.map((Check) => {
    return (
      <Checkbox
        CheckValue={Check.CheckValue}
        chChecked={Check.chChecked}
        readOnly={Check.readOnly}
      />
    );
  });
  return (
    <div>
      <h1>Choose Your Favourite Captain</h1>

      <div
        class="dropdown "
        data-control="checkbox-dropdown"
        onClick={onClickDropDown}
        ref={dropdownRef}
      >
        <label class="dropdown-label">Select</label>

        <div class="dropdown-list">{allCheckbox}</div>
      </div>
    </div>
  );
};

export default MultiSelect;
