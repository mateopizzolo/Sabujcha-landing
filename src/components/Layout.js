import React, {useState} from 'react';
import Navibar from './Navbar/Navbar';
import Sidebar from './Navbar/Sidebar';
import Footer from './Footer/Footer';

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navibar toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
