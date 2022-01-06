import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TableDatePicker from "../../components/Table/TableDatePicker";
import TrackingTableSort from "../../components/Table/TrackingTableSort";
import { FiRefreshCcw } from "react-icons/fi";
import { BsArrowDownUp } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdRefresh } from "react-icons/io";
import { Button } from "@mui/material";

function createData(product, imgUrl, productDate, orderNo, trackingNo, tracking, pod, podButtonText) {
    return {
        product,
        imgUrl,
        productDate,
        orderNo,
        trackingNo,
        tracking,
        pod,
        podButtonText,
    };
}

const rows = [
    createData("Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "29835283 - 2973504", "31Z842FX49113807486", "Pending", "Waiting for Delivery", "Waiting"),
    createData("Bony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "45229835283 - 29735042", "2501Z842FX49113807486", "Pending", "Waiting for Delivery", "Waiting"),
    createData("PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "2629835283 - 29735042", "161Z842FX49113807486", "Pending", "Waiting for Delivery", "Waiting"),
    createData("Frozen yoghurt Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "129835283 - 2973504259", "601Z842FX49113807486", "Pending", "Waiting for Delivery", "Waiting"),
    createData("Gingerbread Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "3529835283 - 297350426", "1601Z842FX49113807486", "Delivered", "Delivered", "Proof"),
    createData("Honeycomb Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "429835283 - 2973504208", "321Z842FX49113807486", "Pending", "Waiting for Delivery", "Waiting"),
    createData("Ice cream sandwich Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "2329835283 - 297350427", "91Z842FX491138074860", "Pending", "Waiting for Delivery", "Waiting"),
    createData("Jelly Bean Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "3729835283 - 297350425", "01Z842FX49113807480", "Pending", "Waiting for Delivery", "Waiting"),
    createData("KitKat Bean Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "5129835283 - 297350428", "261Z842FX491138074860", "Pending", "Waiting for Delivery", "Waiting"),
    createData("Lollipop Bean Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "3929835283 - 297350422", "01Z842FX49113807486", "Delivered", "Delivered", "Delivered"),
    createData("Marshmallow Bean Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "329835283 - 2973504218", "01Z842FX49113807486", "Pending", "Waiting for Delivery", "Waiting"),
    createData("Nougat Bean Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", "36029835283 - 29735042", "191Z842FX491138074860", "Pending", "Waiting for Delivery", "Waiting"),
    createData("Oreo Bean Sony PS5 PlayStation 5 (EU Plug) Blu-ray Edition Console", "imageurl", "Date Sold: 2021-11-25 05:27:43 ", " 29835283 - 29735042437", "1Z842FX491138074868", "Pending", "Waiting for Delivery", "Waiting"),
];
function TableList() {
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const handleSeachButtonClick = () => setSearchBarOpen(true);
    const handleSeachCloseButtonClick = () => {
        console.log("you clicked me");
        setSearchBarOpen(!searchBarOpen);
    };
    return (
        <>
            <div className="st-inner">
                <GridContainer>
                    <GridItem xs={6} sm={6} md={4} lg={3}>
                        <div className="bl-track-box blbox1">
                            <h4>
                                Imported Trackings <FiArrowUpRight />
                            </h4>
                            <div className="blt-number">
                                46 <i className="fa fa-exchange"></i>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={4} lg={3}>
                        <div className="bl-track-box blbox2">
                            <h4>
                                Shipped in total <FiArrowUpRight />
                            </h4>
                            <div className="blt-number">
                                32 <i className="fa fa-car"></i>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={4} lg={3}>
                        <div className="bl-track-box blbox3">
                            <h4>
                                Shipment Delivered <i className="fa fa"></i>
                            </h4>
                            <div className="blt-number">
                                22 <i className="fa fa-check"></i>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={4} lg={3}>
                        <div className="bl-track-box blbox4">
                            <h4>
                                Pending Shipment <i className="fa"></i>
                            </h4>
                            <div className="blt-number">
                                23 <i className="fa fa-clock-o"></i>
                            </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>

            <GridContainer>
                <GridItem md={12} className="bl-table-data">
                    <div className="tracking-table-header">
                        <h2>Your Tracking</h2>
                        <div className="bl-filter-options">
                            <Button className="btn">
                                <FiRefreshCcw /> Tracking
                            </Button>
                            <Button className="btn">
                                <IoMdRefresh /> Refresh
                            </Button>
                            <Button className="btn">
                                <BsArrowDownUp /> Sync Proof
                            </Button>
                            <button className="btn calender-button">
                                <div className="bl-calendar-inner">
                                    <i className="fa fa-calendar"></i> <TableDatePicker />
                                </div>
                            </button>

                            {searchBarOpen && searchBarOpen ? (
                                <Button className="btn bl-search-btn">
                                    <i onClick={handleSeachCloseButtonClick} className="fa fa-close search-close"></i>
                                    <div className="togglesearch">
                                        <input type="text" placeholder="Search here" />
                                        <input type="button" value="Search" />
                                    </div>
                                </Button>
                            ) : (
                                <Button className="btn bl-search-btn">
                                    <i onClick={handleSeachButtonClick} className="fa fa-search"></i>
                                </Button>
                            )}
                        </div>
                    </div>
                    {/* <TrackingTable />
                    <br /> */}
                    <TrackingTableSort className="bl-tracking-table-sort" products={rows} />
                </GridItem>
            </GridContainer>
        </>
    );
}

TableList.layout = Admin;

export default TableList;
