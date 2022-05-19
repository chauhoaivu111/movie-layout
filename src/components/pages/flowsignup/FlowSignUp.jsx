import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import TwitterIcon from "@mui/icons-material/Twitter";
import "./FlowSignUp.scss";
import { Link } from "react-router-dom";
import { Divider, TextField } from "@mui/material";
import DOB from "./BOD";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const FlowSignUp = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            borderRadius: "20px",
            height: "50rem",
            maxWidth: "750px",
          },
        }}
      >
        <div className="props">
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <Link to="/Login">
              <IconButton
                sx={{
                  right: 8,
                  top: -1,
                  left: 2,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon sx={{ fontSize: "1.5rem", color: "black" }} />
              </IconButton>
            </Link>
          </DialogTitle>

          <TwitterIcon className="iconlogo" />
        </div>

        <div className="flow-sigup__content">
          <div className="flow-sigup__content__title">
            <h1>Create your account</h1>
          </div>

          <div className="flow-sigup__content__textfield">
            <TextField
              className="textinput"
              variant="outlined"
              label="Phone, Email, or Username"
              inputProps={{ style: { fontWeight: "600" } }}
            />
          </div>

          <div>
            <div className="flow-sigup__content__textfieldss">
              {show ? (
                <div container={container.current}>
                  <TextField
                    className="textinput"
                    variant="outlined"
                    label="Phone"
                    inputProps={{ style: { fontWeight: "600" } }}
                  />
                </div>
              ) : (
                <div container={container.current}>
                  <TextField
                    className="textinput"
                    variant="outlined"
                    label="Email"
                    inputProps={{ style: { fontWeight: "600" } }}
                  />
                </div>
              )}

              <div className="stylea">
                <a type="button" onClick={handleClick}>
                  {show ? "Use Email instead" : "Use phone instead"}
                </a>
              </div>
            </div>
          </div>

          <div  className="flow-sigup__content__dob">
            <p className="dobs">Date of birth</p>
            <p  className="dobss">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            
          </div>

          <div>
            <DOB/>
          </div>

          <div className="flow-sigup__content__endButton">
            <div className="frame_button">
              <Button className="google_button">
                <p>Next</p>
              </Button>
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default FlowSignUp;
