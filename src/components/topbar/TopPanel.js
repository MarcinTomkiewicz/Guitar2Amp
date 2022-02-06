import { Logo } from "../logo/Logo"
import { IconTray } from "./IconTray"
import { TopMenu } from "./topMenu/TopMenu"


export const TopPanel = () => {
    return (
        <>
        <div className="top__bar">
        <div className="top__logo--wrapper">
        <Logo />
        </div>
        <IconTray />
        </div>
        <div className="top__menu">
        <TopMenu />
        </div>
        </>
    )
}