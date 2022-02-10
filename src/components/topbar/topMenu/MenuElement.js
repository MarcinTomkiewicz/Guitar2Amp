import { useEffect, useState } from "react";
import { SubMenu } from "./SubMenu";

export const MenuElement = ({ menuType, isClicked, isMenuVisible }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuName, setMenuName] = useState("");

  useEffect(() => {
    if (menuType === "guitar") {
      setMenuItems([{pl: "Klasyczne", eng: "acoustic"}, {pl: "Akustyczne", eng: "hollow"}, {pl: "Elektryczne", eng: "solid"}]);
      setMenuName("Gitary");
    }
    if (menuType === "bass") {
      setMenuItems([{pl: "Klasyczne", eng: "acoustic"}, {pl: "Akustyczne", eng: "hollow"}, {pl: "Elektryczne", eng: "solid"}]);
      setMenuName("Basy");
    }
    if (menuType === "amplifiers") {
      setMenuItems([{pl: "Silne", eng: "strong"}, {pl: "Średnie", eng: "medium"}, {pl: "Słabe", eng: "weak"}]);
      setMenuName("Amplitunery");
    }
  }, [menuType]);

  return (
    <>
      <div id={menuType} onClick={isClicked} className="top__menu--element">
        {menuName}
      </div>
      <div className={isMenuVisible !== menuType ? "display__none" : "top__menu--submenu"}>
        <SubMenu menuItems={menuItems} menuName={menuType}/>
      </div>
    </>
  );
};
