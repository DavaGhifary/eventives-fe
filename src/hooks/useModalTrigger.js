import { useState } from "react";

export default function useModalTrigger() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  };
  //Alternative toggle
  const forceFalse = () => {
    setModalVisibility(false);
  }
  return { modalVisibility, toggleModal, forceFalse };
}
