import "../../styles.css"
import { Sidebar } from "./Sidebar"

export const Layout = ({children}) => {
    return(<>
        <div className="pageLayout">
            <Sidebar />
            <div className="pageContainer"> {children} </div>
        </div>
    </>)
}