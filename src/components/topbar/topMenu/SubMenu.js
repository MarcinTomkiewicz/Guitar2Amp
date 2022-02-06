export const SubMenu = ({ menuItems }) => {
  return (
      <ul className="top__menu--list">
        {menuItems.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
  );
};
