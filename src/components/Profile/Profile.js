import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";
import { selectCheckBox, selectName } from "../../store/profile/selectors";
import "./Profile.css";

export const Profile = () => {
  const checkboxValue = useSelector(selectCheckBox);
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleCheckbox);
  };

  return (
    <div className="profile-block">
      <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
      <h1 className="profile-block__name">{name}</h1>
    </div>
  );
};
