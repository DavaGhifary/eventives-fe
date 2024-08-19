"use client";
import { useState } from "react";
import DynaPlusBtn from "../common/DynaPlusBtn";
import DynaMinusBtn from "../common/DynaMinusBtn";

export default function useDynamicFields({ initialValues }) {
  const [listFields, setListFields] = useState([
    { value: initialValues, buttonState: true },
  ]);
  console.log(listFields);
  function handleAddFields() {
    const addedListFields = listFields.map((item) => ({
      ...item,
      buttonState: false,
    }));
    setListFields([{ value: "", buttonState: true }, ...addedListFields]);
  }

  function handleRemoveFields(index) {
    const deletedListFields = [...listFields];
    deletedListFields.splice(index, 1);
    setListFields(deletedListFields);
  }
  function handleFieldsChange(index, event) {
    const newListFields = [...listFields];
    newListFields[index].value = event.target.value;
    setListFields(newListFields);
  }

  function handleButtonStateChange(listField, index, iconClass, btnClass) {
    let btnJSX;
    listField.buttonState
      ? (btnJSX = (
          <DynaPlusBtn
            iconClass={iconClass}
            btnClass={btnClass}
            onClick={() => handleAddFields()}
          />
        ))
      : (btnJSX = (
          <DynaMinusBtn
            btnClass={btnClass}
            iconClass={iconClass}
            onClick={() => handleRemoveFields(index)}
          />
        ));
    return btnJSX;
  }

  return [listFields, handleFieldsChange, handleButtonStateChange];
}
