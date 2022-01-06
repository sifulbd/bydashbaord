import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

function TableList() {
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}></GridItem>
        </GridContainer>
    );
}

TableList.layout = Admin;

export default TableList;
