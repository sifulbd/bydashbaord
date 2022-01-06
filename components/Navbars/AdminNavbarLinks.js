import React, { useState, useContext } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Poppers from "@material-ui/core/Popper";
import useWindowSize from "components/Hooks/useWindowSize.js";
import GridItem from "components/Grid/GridItem.js";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import styles from "assets/jss/nextjs-material-dashboard/components/headerLinksStyle.js";
import man from "../../assets/img/man.png";
import { ThemeContext } from "../../layouts/Admin";

export default function AdminNavbarLinks({ setTheme }) {
    const size = useWindowSize();
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [openNotification, setOpenNotification] = React.useState(null);
    const [openProfile, setOpenProfile] = React.useState(null);
    const { theme } = useContext(ThemeContext);

    const handleClickNotification = (event) => {
        if (openNotification && openNotification.contains(event.target)) {
            setOpenNotification(null);
        } else {
            setOpenNotification(event.currentTarget);
        }
    };
    const handleCloseNotification = () => {
        setOpenNotification(null);
    };
    const handleClickProfile = (event) => {
        if (openProfile && openProfile.contains(event.target)) {
            setOpenProfile(null);
        } else {
            setOpenProfile(event.currentTarget);
        }
    };
    const handleCloseProfile = () => {
        setOpenProfile(null);
    };

    return (
        <div>
            <GridItem md="12">
                <ul className="top-right-nav">
                    <li className="bl-color" onClick={() => setTheme(!theme)}>
                        {theme ? <BsSun /> : <FaMoon />}
                    </li>
                    <li
                        className={`${classes.buttonLink} top-notification`}
                        color={size.width > 959 ? "transparent" : "white"}
                        justicon={size.width > 959}
                        simple={!(size.width > 959)}
                        aria-owns={openNotification ? "notification-menu-list-grow" : null}
                        aria-haspopup="true"
                        onClick={handleClickNotification}
                    >
                        <i className="fa fa-bell"></i>
                        <span>1</span>
                    </li>
                    <li color={size.width > 959 ? "transparent" : "white"} justicon={size.width > 959} simple={!(size.width > 959)} aria-owns={openProfile ? "profile-menu-list-grow" : null} aria-haspopup="true" onClick={handleClickProfile} className={classes.buttonLink}>
                        <img src={man} alt="" />
                    </li>
                </ul>
            </GridItem>

            {/* Notification Dropdown */}
            <Poppers open={Boolean(openNotification)} anchorEl={openNotification} transition disablePortal className={classNames({ [classes.popperClose]: !openNotification }) + " " + classes.popperNav}>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        id="notification-menu-list-grow"
                        style={{
                            transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleCloseNotification}>
                                <MenuList role="menu" className={`blnotification ${theme ? "dark" : "light"}`}>
                                    <MenuItem onClick={handleCloseNotification} className={`${classes.dropdownItem} bl-notification-content`}>
                                        <div className="bl-notificationItem">
                                            <span>05:27:29</span>
                                            <h4>
                                                {" "}
                                                <i className="fa fa-check"></i> Successfully Imported
                                            </h4>
                                            <p>You have Successfully imported 34 sales from your CSV file.</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotification} className={`${classes.dropdownItem} bl-notification-content`}>
                                        <div className="bl-notificationItem">
                                            <span>05:27:29</span>
                                            <h4>
                                                {" "}
                                                <i className="fa fa-exclamation"></i> Import Fail
                                            </h4>
                                            <p>You have Successfully imported sales from your CSV file.</p>
                                        </div>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Poppers>

            {/* Profile Dropdown */}
            <div className={classes.manager}>
                <Poppers open={Boolean(openProfile)} anchorEl={openProfile} transition disablePortal className={classNames({ [classes.popperClose]: !openProfile }) + " " + classes.popperNav}>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="profile-menu-list-grow"
                            style={{
                                transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                                backgroundColor: "transparent",
                                marginTop: "7px",
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleCloseProfile}>
                                    <MenuList role="menu" className="adminProfileNavbar">
                                        <MenuItem onClick={handleCloseProfile} className={classes.dropdownItem}>
                                            <i style={{ marginRight: "8px" }} className="fa fa-sign-out"></i>Logout
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Poppers>
            </div>
        </div>
    );
}
