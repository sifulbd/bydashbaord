import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ThemeContext } from "../../layouts/Admin";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "0px solid #000",
    boxShadow: "none",
    p: 4,
};

const InvoiceModal = (props) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const text = props.text && props.text ? props.text : "Edit";
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <Button className="menuItem" onClick={handleModalOpen}>
                {text && text}
            </Button>
            <Modal className={`bl-invoice-modal ${theme ? "darkTheme" : "lightTheme"}`} open={modalOpen} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className="heBox theblmodal" style={{ borderRadius: "10px" }} sx={style}>
                    <i className="fa fa-close pull-right" onClick={handleModalClose} style={{ color: "white", cursor: "pointer" }}></i>

                    <Typography style={{ color: "#fff", marginBottom: "20px" }} id="modal-modal-title" variant="h6" component="h2">
                        Edit Tracking
                    </Typography>
                    <div className="form-group bl-form-group">
                        <label htmlFor="">Tracking Number:</label>
                        <input type="text" placeholder="87373672-462837" className="bl-form-control" />
                    </div>
                    <div className="form-group bl-form-group">
                        <label htmlFor="">Order Number:</label>
                        <input type="text" placeholder="87373672-462837" className="bl-form-control" />
                    </div>

                    <Button className="btn bl-form-btn" onClick={handleModalClose}>
                        <i className="fa fa-download"></i> Save
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default InvoiceModal;
