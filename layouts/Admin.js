import React, { useState } from "react";
import { useRouter } from "next/router";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "routes.js";
import styles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import logo from "assets/img/reactlogo.png";
import darklogo from "assets/img/darklogo.png";
import whitelogo from "assets/img/whitelogo.png";
import "react-datepicker/dist/react-datepicker.css";

// light version test

export const ThemeContext = React.createContext();

let ps;

export default function Admin({ children, ...rest }) {
    // used for checking current route
    const router = useRouter();
    // styles
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    // ref to help us initialize PerfectScrollbar on windows devices
    const mainPanel = React.createRef();
    // states and functions
    const [image, setImage] = React.useState(logo);
    const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [theme, setTheme] = useState(true);

    const handleFixedClick = () => {
        if (fixedClasses === "dropdown") {
            setFixedClasses("dropdown show");
        } else {
            setFixedClasses("dropdown");
        }
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const getRoute = () => {
        return router.pathname !== "/admin/maps";
    };
    const resizeFunction = () => {
        if (window.innerWidth >= 960) {
            setMobileOpen(false);
        }
    };

    // // initialize and destroy the PerfectScrollbar plugin
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(mainPanel.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
            document.body.style.overflow = "hidden";
        }
        window.addEventListener("resize", resizeFunction);
        // Specify how to clean up after this effect:s
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
            }
            window.removeEventListener("resize", resizeFunction);
        };
    }, [mainPanel]);
    console.log("from admin", theme);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${classes.wrapper} mainBody ${!theme ? "light" : "dark"}`}>
                <Sidebar className="bl-sidebar" setTheme={setTheme} theme={theme} routes={routes} logoText={"Billy."} logo={!theme ? darklogo : whitelogo} image={image} handleDrawerToggle={handleDrawerToggle} open={mobileOpen} {...rest} />
                <div className={`${classes.mainPanel} bl-main-panel`} ref={mainPanel}>
                    <Navbar theme={theme} setTheme={setTheme} routes={routes} handleDrawerToggle={handleDrawerToggle} {...rest} />
                    {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
                    {getRoute() ? (
                        <div className={`${classes.content} bl-main-content-area`}>
                            <div className={classes.container}>{children}</div>
                        </div>
                    ) : (
                        <div className={classes.map}>{children}</div>
                    )}
                    {/* Footer */}
                    {/* {getRoute() ? <Footer /> : null} */}
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
