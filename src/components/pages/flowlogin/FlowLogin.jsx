import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./FlowLogin.scss";
import { Link } from "react-router-dom";
import { Divider, TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const FlowLogin = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
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

        <div className="Flow-login__content">
          <div className="Flow-login__content__title">
            <h1>Sign in to Twitter</h1>
          </div>
          <div className="Flow-login__content__Buttons">
            <div className="frame_button">
              <Button className="google_button">
                <img src="https://chisnghiax.com/ncmaz/assets/Google.e6e5ddf2.svg" />
                <p>Sign up with Google </p>
              </Button>
            </div>

            <div className="frame_button">
              <Button className="apple_button">
                <i class="bx bxl-apple"></i>
                <p>Sign up with Apple </p>
              </Button>
            </div>
            <div className="divider_or">
              <Divider className="dividers1" />
              or
              <Divider className="dividers2" />
            </div>
          </div>

          <div className="Flow-login__content__textfield">
            <TextField
              className="textinput"
              variant="outlined"
              label="Phone, Email, or Username"
              inputProps={{ style: { fontWeight: "600" } }}
            />
          </div>

          <div className="Flow-login__content__endButton">
            <div className="frame_button">
              <Button className="google_button">
                <p>Next</p>
              </Button>
            </div>

            <div className="frame_button">
              <Button className="apple_button">
                <p>Forgot password? </p>
              </Button>
            </div>
          </div>
          <div className="Flow-login__content__noaccount">
              <p>
                  Don't have an account?<Link to='/FlowSignUp'><span> Sign up</span></Link>
              </p>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default FlowLogin;
