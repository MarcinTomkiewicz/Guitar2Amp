
export const IconTray = () => {

const icons = [
    '/facebook.png',
    '/twitter.png',
    '/insta.png'
]

  return (
    <div className="icon__tray">
        {icons.map((el) => {
            return (
            <img src={process.env.PUBLIC_URL + `${el}`} alt={el} key={el} className="social__icon"></img>
            )
        })}
    </div>
  );
};
