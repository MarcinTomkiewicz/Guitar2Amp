import { guitars } from "../../../objects/guitars"

export const Hollow = () => {
    return (
    <div>
    {guitars.map((el) => {
        if (el.type === "hollow") {
        return (
        <div className="main__content">
        <div>Nazwa: {el.name}</div>
        <img src={el.img} alt={el.name}></img>
        <div>Opis: {el.descr}</div>
        <div>Cena: {el.price} PLN</div>
        </div>
        )
}})}
</div>
    )
}