import React , {useState} from 'react'
import { Navbar} from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Home.css'
import SideNav from './SideNav'

function Home() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Navbar className="NavbarOut"  bg="danger">
                <Navbar.Brand  className="NavbarStyle" bsPrefix="navBarStyle">Butterfly Group Admin Panel</Navbar.Brand>
                <IconButton className="ml-auto" aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon className="IconStyle" fontSize="default" />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose} >

                    <MenuItem onClick={handleClose}><span><SettingsIcon color="action" className="IconStyle" fontSize="default"></SettingsIcon></span><span>Setting</span></MenuItem>
                    <MenuItem onClick={handleClose}><ExitToAppIcon color="action" className="IconStyle" fontSize="default"></ExitToAppIcon><span>Logout</span></MenuItem>
                </Menu>
            </Navbar>
            <div className="SideNav">
                <SideNav></SideNav>
            </div>
        </div>
    )
}

export default Home
