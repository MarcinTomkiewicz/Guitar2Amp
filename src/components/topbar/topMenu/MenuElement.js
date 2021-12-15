import { useEffect, useState } from "react";
import { SubMenu } from "./SubMenu";

export const MenuElement = ({ menuType, isClicked, isMenuVisible }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuName, setMenuName] = useState("");

  useEffect(() => {
    if (menuType === "guitar") {
      setMenuItems(["Klasyczne", "Akustyczne", "Elektryczne"]);
      setMenuName("Gitary");
    }
    if (menuType === "bass") {
      setMenuItems(["Klasyczne", "Akustyczne", "Elektryczne"]);
      setMenuName("Basy");
    }
    if (menuType === "amplifiers") {
      setMenuItems(["Mocne", "Silne", "Słabe"]);
      setMenuName("Amplitunery");
    }
  }, [menuType]);

  return (
    <>
      <div id={menuType} onClick={isClicked}>
        {menuName}
      </div>
      <div className={isMenuVisible !== menuType ? "display__none" : ""}>
        <SubMenu menuItems={menuItems} />
      </div>
    </>
  );
};
