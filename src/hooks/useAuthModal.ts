import { useState } from "react";

const useAuthModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openAuthModal = () => {
    setIsOpen(true);
  };

  const closeAuthModal = () => {
    setIsOpen(false);
  };

  const toggleAuthModal = () => {
    setIsOpen((prev) => !prev);
  };

  return { openAuthModal, closeAuthModal, toggleAuthModal, isOpen };
};

export default useAuthModal;
