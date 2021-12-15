import { useState } from "react";
import { MenuElement } from "./MenuElement";

export const TopMenu = () => {

  const [isMenuVisible, setIsMenuVisible] = useState("")

  const handleClick = (e) => {
    console.log(e.target.id);
    e.preventDefault();
    setIsMenuVisible(e.target.id)
    if (isMenuVisible === e.target.id) {
      setIsMenuVisible("")
    }
  };

  return (
    <div className="top__menu--elements">
      <MenuElement isClicked={handleClick} isMenuVisible={isMenuVisible} menuType="guitar" />
      <MenuElement isClicked={handleClick} isMenuVisible={isMenuVisible} menuType="bass" />
      <MenuElement isClicked={handleClick} isMenuVisible={isMenuVisible} menuType="amplifiers" />
    </div>
  );
};
