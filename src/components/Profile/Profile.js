import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";
import "./Profile.css";

export const Profile = () => {
  const checkboxValue = useSelector(state => state.checkbox);
  const name = useSelector(state => state.name);
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
