import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { guitars } from "../../../objects/guitars";

export const DisplayGuitar = ({ chosenType }) => {
  let location = useLocation();

  return (
    <div className="guitar__display">
      {guitars.map((el) => {
        if (el.type === chosenType) {
          const linkTo = `${location.pathname}/${el.short}`;
          return (
            <Link to={linkTo} className="main__content guitar__display--detail">
              <div className="guitar__name">{el.name}</div>
              <img src={el.img} alt={el.name} className="guitar__image"></img>
              {el.sold ? (
                <div style={{ color: "red" }}>UNAVAILABLE</div>
              ) : (
                <div>{el.price} PLN</div>
              )}
            </Link>
          );
        }
        if (chosenType === "all") {
          if (el.sold !== true) {
            const linkTo = `${el.type}/${el.short}`;
            return (
              <Link
                to={linkTo}
                className="main__content guitar__display--detail"
              >
                <div className="guitar__name">{el.name}</div>
                <img src={el.img} alt={el.name} className="guitar__image"></img>
                {el.sold ? (
                  <div style={{ color: "red" }}>UNAVAILABLE</div>
                ) : (
                  <div>{el.price} PLN</div>
                )}
              </Link>
            );
          }
        } else {
          return;
        }
      })}
    </div>
  );
};
