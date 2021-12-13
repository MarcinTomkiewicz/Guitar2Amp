import { Logo } from "../logo/Logo"
import { AddressInfo } from "./AddressInfo"
import { IconTray } from "./IconTray"
import { TopMenu } from "./TopMenu"


export const TopPanel = () => {
    return (
        <>
        <div className="top__bar">
        <Logo />
        <AddressInfo />
        <IconTray />
        </div>
        <div className="top__menu">
        <TopMenu />
        </div>
        </>
    )
}