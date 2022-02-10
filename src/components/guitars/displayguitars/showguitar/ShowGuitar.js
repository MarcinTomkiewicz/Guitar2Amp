import { guitars } from "../../../../objects/guitars";
import { CarouselImages } from "./CarouselImages";

export const ShowGuitar = ({ guitar }) => {
  return guitars.map((el) => {
    if (el.short === guitar) {
      return (
        <>
          <div className="main__content" key={el.name}>
            <div className="guitar__content--wrapper">
              <div className="guitar__content--photos">
                <CarouselImages images={el.moreImg} />
              </div>
              <ul className="guitar__content--details">
                <li className="guitar__content--element">{el.name}</li>
                <li className="guitar__content--element">{el.price} PLN</li>
                {console.log(el.descr)}
                {el.descr.map((description, i) => {
                  console.log(description);
                  return (
                    <li key={i} className="guitar__content--element">
                      {description}
                    </li>
                  );
                })}
                <li className="guitar__content--element">
                  Stan: {el.condition}
                </li>
                <li className="guitar__content--element">Case: {el.case}</li>
                <li className="guitar__content--element">
                  Waga: {el.weight} {el.weight === "-" ? "" : "kg"}
                </li>
                <li className="guitar__content--element">
                  Numer seryjny: {el.serial}
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    } else {
      return;
    }
  });
};
