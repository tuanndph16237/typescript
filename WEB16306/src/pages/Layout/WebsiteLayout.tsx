import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}
const WebsiteLayout = (props: Props) =>{
    return (
        <div>
                <header>Header Website</header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    Footer
                </footer>
        </div>
    )
}
export default WebsiteLayout