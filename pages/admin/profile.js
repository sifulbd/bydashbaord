import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import man from "../../assets/img/man.png";
import { FileUploader } from "react-drag-drop-files";
import { FaSun } from "react-icons/fa";
import { Button, FormControl, InputLabel, NativeSelect } from "@mui/material";

const fileTypes = ["PNG"];

function Dashboard() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md="6">
                            <div className="form-group bl-form-group">
                                <FormControl fullWidth>
                                    <label htmlFor="">Invoice numbering sequence:</label>
                                    <NativeSelect
                                        defaultValue={1}
                                        inputProps={{
                                            name: "age",
                                            id: "uncontrolled-native",
                                        }}
                                        className="bl-form-control"
                                    >
                                        <option value={1}>xxxx-mm-year</option>
                                        <option value={20}>Invoice numbering sequence 2</option>
                                        <option value={30}>Invoice numbering sequence 3</option>
                                    </NativeSelect>
                                </FormControl>
                            </div>

                            <div className="form-group bl-form-group">
                                <label htmlFor="">Payment:</label>
                                <input type="text" placeholder="Bank Transfer" className="bl-form-control" />
                            </div>
                            <div className="form-group bl-form-group">
                                <label htmlFor="">Bank Name:</label>
                                <input type="text" placeholder="Sparkasse" className="bl-form-control" />
                            </div>
                            <div className="form-group bl-form-group">
                                <label htmlFor="">IBAN:</label>
                                <input type="text" placeholder="DE00 0000 0000 0000 00" className="bl-form-control" />
                            </div>
                            <div className="form-group bl-form-group">
                                <label htmlFor="">Stockx Email:</label>
                                <input type="email" placeholder="petrpaly@gmail.com" className="bl-form-control" />
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <div className="form-group bl-form-group">
                                <FormControl fullWidth>
                                    <label htmlFor="">TAX Country</label>
                                    <NativeSelect
                                        defaultValue={2}
                                        inputProps={{
                                            name: "age",
                                            id: "uncontrolled-native",
                                        }}
                                        className="bl-form-control"
                                    >
                                        <option value={2}>Germany</option>
                                        <option value={20}>France</option>
                                        <option value={30}>Belgium</option>
                                    </NativeSelect>
                                </FormControl>
                            </div>
                            <div className="form-group bl-form-group">
                                <label htmlFor="">Annotation text:</label>
                                <textarea type="text" placeholder="It is a tax-free intra-Community supply. Zero-rated intra-EU sale." rows="8" className="bl-textarea-control" />
                            </div>

                            <div className="form-group bl-form-group">
                                <label htmlFor="">Footer Info:</label>
                                <input type="text" placeholder="YOUR COMPANY 1331 Hart Ridge Road, 48436 Gaines, MI" className="bl-form-control" />
                            </div>
                            <div className="form-group bl-form-group">
                                <label htmlFor="">Stockx Password:</label>
                                <input type="password" placeholder="********" className="bl-form-control" />
                            </div>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={12}>
                            <div className="form-group bl-form-group bltext-area">
                                <label htmlFor="">Logo:</label>

                                <FileUploader classes="formFileUploader" handleChange={handleChange} name="file" types={fileTypes}>
                                    <div className="insidefileupload">
                                        <i className="fa fa-image"></i>
                                        <p>Drag & Drop files here</p>
                                    </div>
                                </FileUploader>

                                <p className="filuploadertext">836 x 155 px (PNG)</p>
                            </div>
                        </GridItem>
                    </GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Button className="btn bl-form-btn profile">
                            <i className="fa fa-download"></i> Save
                        </Button>
                    </GridItem>
                </GridItem>
            </GridContainer>
        </>
    );
}

Dashboard.layout = Admin;

export default Dashboard;
