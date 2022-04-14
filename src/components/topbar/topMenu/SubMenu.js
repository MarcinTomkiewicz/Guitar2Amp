import { Link as RouterLink} from "react-router-dom";

export const SubMenu = ({ menuItems, menuName }) => { 
  return (
      <ul className="top__menu--list">
        <RouterLink to={menuName} className="top__menu--element"><li id="Wszystkie">Wszystkie</li></RouterLink>
        {menuItems.map((el) => {
          if (el.eng !== undefined) {
            const linkValue = `${menuName}/${el.eng}`;
          return <RouterLink to={linkValue} id={el.pl} key={el.pl} className="top__menu--element"><li id={el.pl} key={el.eng}>{el.pl}</li></RouterLink>;
          }
          else {
            return null;
          }
        })}
      </ul>
  );
};
