export const SubMenu = ({ menuItems }) => {
  return (
    <div className="top__menu--submenu">
      <ul style={{ listStyle: "none" }}>
        {menuItems.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </div>
  );
};
