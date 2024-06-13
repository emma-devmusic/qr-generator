import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"

export const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="" style={{
                height: 'calc(100vh - 66px)',
            }}>
                <Outlet />
            </div>
        </div>
    )
}
