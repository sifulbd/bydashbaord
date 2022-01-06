/*eslint-disable*/
import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";
import styles from "assets/jss/nextjs-material-dashboard/components/sidebarStyle.js";
import { ThemeContext } from "../../layouts/Admin";

export default function Sidebar(props) {
    const { theme, setTheme } = useContext(ThemeContext);

    // used for checking current route
    const router = useRouter();
    // creates styles for this component
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    // verifies if routeName is the one active (in browser input)
    function activeRoute(routeName) {
        return router.route.indexOf(routeName) > -1 ? true : false;
    }
    const { color, logo, image, item, routes } = props;

    var links = (
        <List className={`bl-sidebar-list ${classes.list}`}>
            {routes.map((prop, key) => {
                var activePro = " ";
                var listItemClasses;

                if (prop.path === "/upgrade-to-pro") {
                    activePro = classes.activePro + " ";
                    listItemClasses = classNames({
                        [" " + classes[color]]: true,
                    });
                } else {
                    listItemClasses = classNames({
                        [" " + classes[color]]: activeRoute(prop.layout + prop.path),
                    });
                }

                const whiteFontClasses = classNames({
                    [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path) || prop.path === "/upgrade-to-pro",
                });
                const darkFontClasses = classNames({
                    [" " + classes.darkFont]: activeRoute(prop.layout + prop.path) || prop.path === "/upgrade-to-pro",
                });

                return (
                    <Link href={prop.layout + prop.path} key={key}>
                        <a className={activePro + classes.item}>
                            <ListItem button className={classes.itemLink + listItemClasses}>
                                {typeof prop.icon === "string" ? (
                                    <Icon
                                        className={classNames(theme ? classes.itemIcon : classes.itemIconDark, theme ? whiteFontClasses : darkFontClasses, {
                                            [classes.itemIconRTL]: props.rtlActive,
                                        })}
                                    >
                                        {prop.icon}
                                    </Icon>
                                ) : (
                                    <prop.icon
                                        className={classNames(theme ? classes.itemIcon : classes.itemIconDark, theme ? whiteFontClasses : darkFontClasses, {
                                            [classes.itemIconRTL]: props.rtlActive,
                                        })}
                                    />
                                )}
                                <ListItemText
                                    primary={props.rtlActive ? prop.rtlName : prop.name}
                                    className={`btl-sidebar-content ${classNames(theme ? classes.itemText : classes.itemTextDark, theme ? whiteFontClasses : darkFontClasses, {
                                        [classes.itemTextRTL]: props.rtlActive,
                                    })}`}
                                    disableTypography={true}
                                />
                                {prop.badgeNumber && prop.badgeNumber.length > 0 ? (
                                    <span
                                        className={`bl-item-block ${classNames(theme ? classes.itemText : classes.itemTextDark, theme ? whiteFontClasses : darkFontClasses, {
                                            [classes.itemTextRTL]: props.rtlActive,
                                        })}`}
                                    >
                                        {" "}
                                        {prop.badgeNumber}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </ListItem>
                        </a>
                    </Link>
                );
            })}
        </List>
    );
    var brand = (
        <div className={`bl-logo ${classes.logo}`}>
            <Link href="/">
                <a>
                    {" "}
                    <div className={classes.logoImage}>
                        <img src={logo} alt="logo" className={classes.img} />
                    </div>
                    {/* {logoText} */}
                </a>
            </Link>
        </div>
    );
    return (
        <div className="bl-mobile-sidebar">
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={props.rtlActive ? "left" : "right"}
                    open={props.open}
                    classes={{
                        paper: classNames(`bl-sidebar ${theme ? "bldark" : "bllight"} ${theme ? classes.drawerPaperDark : classes.drawerPaperLight}`, {
                            [classes.drawerPaperRTL]: props.rtlActive,
                        }),
                    }}
                    onClose={props.handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, //Better open performance on mobile.
                    }}
                >
                    {brand}
                    <div className={classes.sidebarWrapper}>
                        <AdminNavbarLinks theme={theme} setTheme={setTheme} />
                        {links}
                    </div>
                    {/* {image !== undefined ? <div className={classes.background} /> : null} */}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    anchor={props.rtlActive ? "right" : "left"}
                    variant="permanent"
                    open
                    classes={{
                        paper: classNames(`bl-sidebar ${theme ? classes.drawerPaperDark : classes.drawerPaperLight}`, {
                            [classes.drawerPaperRTL]: props.rtlActive,
                        }),
                    }}
                >
                    {brand}
                    <div className={classes.sidebarWrapper}>{links}</div>
                    {theme ? <div className={classes.background} /> : null}
                </Drawer>
            </Hidden>
        </div>
    );
}

Sidebar.propTypes = {
    rtlActive: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    bgColor: PropTypes.oneOf(["white", "purple", "blue", "green", "orange", "red"]),
    logo: PropTypes.string,
    image: PropTypes.string,
    logoText: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object),
    open: PropTypes.bool,
};
