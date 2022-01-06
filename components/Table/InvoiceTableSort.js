import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import productImage from "../../assets/img/man.png";
import { styled, alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TrackingModal from "./TrackingModal";
import InvoiceModal from "./InvoiceModal";
import { ThemeContext } from "../../layouts/Admin";
import { HiOutlineCloudDownload } from "react-icons/hi";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const StyledMenu = styled((props) => (
    <>
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            classes={"thisisall"}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            {...props}
        />
    </>
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        backgroundColor: "transparent",
        color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
        boxShadow: "none",
        border: "1px solid transparent",
        "& .MuiMenu-list .malist": {
            padding: "4px 0",
            color: "#fff",
            backgroundColor: theme ? "#1c1c1c" : "fff",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: "#fff",
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: "#262626",
            },
        },
    },
}));

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = "ascending";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort };
};

export default function InvoiceTableSort(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { theme } = useContext(ThemeContext);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <TableContainer sx={{ maxHeight: 440 }} className="bl-tracking-table" component={Paper}>
            <Table className="bl-table" sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                <TableHead className="bl-table-head">
                    <TableRow className="tablerow">
                        {/* <TableCell>Image</TableCell> */}
                        <TableCell onClick={() => requestSort("product")} className={` ${getClassNamesFor("product")}`}>
                            <i className="fa fa-sort"></i> Products
                        </TableCell>
                        <TableCell onClick={() => requestSort("invoiceNo")} className={`bl-tr-hide-xs ${getClassNamesFor("invoiceNo")}`} align="right">
                            <i className="fa fa-sort"></i> Invoice Number
                        </TableCell>
                        <TableCell onClick={() => requestSort("orderNo")} className={`bl-tr-hide-xs ${getClassNamesFor("orderNo")}`} align="right">
                            {" "}
                            <i className="fa fa-sort"></i> Order Number
                        </TableCell>
                        <TableCell onClick={() => requestSort("pod")} className={`bl-tr-hide-xs ${getClassNamesFor("pod")}`} align="right">
                            <i className="fa fa-sort"></i> PoD
                        </TableCell>
                        <TableCell style={{ paddingLeft: "20px", paddingRight: "20px" }} onClick={() => requestSort("netSold")} className={`bl-tr-hide-xs ${getClassNamesFor("netSold")}`} align="right">
                            <i className="fa fa-sort"></i> Net Sold
                        </TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row) => (
                        <TableRow className="tablerow" key={row.product} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell>
                                <div className="billy-product">
                                    <img src={productImage} alt="" />
                                    <div className="product-description">
                                        <h4>{row.product}</h4>
                                        <p>{row.productDate} </p>
                                        <p className="pending-color bl-tracking-on-mobile">
                                            {" "}
                                            <i className="fa fa-clock-o"></i> {row.pod}
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="bl-tr-hide-xs" align="right" style={{ minWidth: "170px" }}>
                                {row.invoiceNo}
                            </TableCell>
                            <TableCell className="bl-tr-hide-xs" align="right">
                                {row.orderNo}
                            </TableCell>
                            {row.pod === "Delivered" ? (
                                <TableCell style={{ minWidth: "80px" }} className="success-color bl-tr-hide-xs" align="right">
                                    <i className="fa fa-check"></i> {row.pod}
                                </TableCell>
                            ) : (
                                <TableCell style={{ minWidth: "80px" }} className="pending-color bl-tr-hide-xs" align="right">
                                    <i className="fa fa-clock-o"></i> {row.pod}
                                </TableCell>
                            )}
                            <TableCell className="bl-tr-hide-xs" align="right">
                                <div className="pod-content">
                                    {row.netSold}
                                    <Button className="btn bl-btn bl-waiting-btn btn-proof">
                                        {" "}
                                        <HiOutlineCloudDownload /> {row.invoiceButtonText}
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell align="right" className="bl-action-td">
                                <i className="fa fa-ellipsis-v btn-action" id="demo-customized-button" aria-controls="demo-customized-menu" aria-haspopup="true" aria-expanded={open ? "true" : undefined} variant="contained" disableElevation onClick={handleClick}></i>
                                <div className="bl-table-dropdown">
                                    <StyledMenu
                                        id="demo-customized-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "demo-customized-button",
                                            className: theme ? "bldarktabledropdown" : "bllighttabledropdown",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        className="bl-table-dropdown-area"
                                        onClose={handleMenuClose}
                                    >
                                        <InvoiceModal className="menuItem" text="Edit Invoice" />
                                        <Button onClick={() => alert("Are you sure")} className="menuItem">
                                            Delete Invoice
                                        </Button>
                                    </StyledMenu>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
