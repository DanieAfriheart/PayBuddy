import React, { useEffect } from 'react'
import { Outlet } from 'react-router';
import Navbar from "./Nav";
function Dashboard() {
    useEffect(() => {
        document.title = "PayBuddy | My Dashboard"
    })
    return (
        <React.Fragment>
            <Navbar />
<Outlet/>
        </React.Fragment>
    )
}

export default Dashboard