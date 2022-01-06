// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
const dashboardRoutes = [
    {
        path: "/invoices",
        name: "Invoices",
        icon: ShoppingCartIcon,
        badgeNumber: "46",
        layout: "/admin",
    },
    {
        path: "/tracking",
        name: "Tracking",
        badgeNumber: "23",
        layout: "/admin",
        // icon: "content_paste",
        icon: DonutSmallIcon,
    },
    {
        path: "/profile",
        name: "My Profile",
        icon: AdminPanelSettingsIcon,
        layout: "/admin",
    },
    {
        path: "/invoicehub",
        name: "Invoice Hub",
        icon: LibraryBooks,
        layout: "/admin",
    },
];
export default dashboardRoutes;
