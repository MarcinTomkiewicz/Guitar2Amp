import { useState, useEffect } from "react";
import { MenuElement } from "./MenuElement";

export const TopMenu = () => {

  const [isMenuVisible, setIsMenuVisible] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    setIsMenuVisible(e.target.id)
    // setClickedOutside(false)
    if (isMenuVisible === e.target.id) {
      setIsMenuVisible("")
    }
  };
  
  // const [clickedOutside, setClickedOutside] = useState(false);
  // const myRef = useRef();

  const handleClickOutside = e => {
    if (e.target.id !== isMenuVisible) {
      setIsMenuVisible("")
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });


  return (
    <div className="top__menu--elements">
      <MenuElement isClicked={handleClick} isMenuVisible={isMenuVisible} menuType="bass" />
      <MenuElement isClicked={handleClick} isMenuVisible={isMenuVisible} menuType="guitar" />
      <MenuElement isClicked={handleClick} isMenuVisible={isMenuVisible} menuType="amplifiers" />
    </div>
  );
};
