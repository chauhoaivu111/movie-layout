import React from "react";
import "./Login.scss";
import BG from "../../../assets/login_bg.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="twitter_flow">
      <div className="twitter_flow__content">
        <div className="twitter_flow__content__menu ">
          <div className="twitter_flow__content__menu__menus">
            <div className="twitter_flow__content__menu__menus__Logo">
              <TwitterIcon className="iconTwitter" />
            </div>

            <div className="twitter_flow__content__menu__menus__titile">
              <h1>Happening now</h1>
              <h2>Join Twitter today.</h2>
            </div>

            <div className="twitter_flow__content__menu__menus__buttons">
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

              <div className="frame_button">
             <Button className="phoneoremail">
                 <p>Sign up with phone or Email </p> 
                </Button>
                
                <p className="sub_submit">
                  By signing up, you agree to the{" "}
                  <span> Terms of Service </span> and{" "}
                  <span>Privacy Policy</span>, including{" "}
                  <span>Cookie Use.</span>
                </p>
              </div>

              <div className="frame_button">
                <h3>Already have an account?</h3>
                <Link to='/Flow/Login'><Button>
                  <p>Sign in</p>
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="twitter_flow__content__img">
          <img src={BG} />
        </div>
      </div>

      <div className="twitter_flow__copyright">
        <Link className="topcopyright">Copyright</Link>
        <Link className="topcopyright">Help Center</Link>
        <Link className="topcopyright">Term of Service</Link>
        <Link className="topcopyright">Privacy Policy</Link>
        <Link className="topcopyright">Cookie Policy</Link>
        <Link className="topcopyright">Accessibility</Link>
        <Link className="topcopyright">Ads info</Link>
        <Link className="topcopyright">Blog Status</Link>
        <Link className="topcopyright">Careers</Link>
        <Link className="topcopyright">Brand Resources</Link>
        <Link className="topcopyright">advertising</Link>
        <Link className="topcopyright">Marketing</Link>
        <Link className="topcopyright">Twitter for Busiess</Link>
        <Link className="topcopyright">Developers</Link>
        <Link className="topcopyright">Directory</Link>
        <Link className="topcopyright">Settings</Link>
        <Link className="topcopyrightend">
          <i class="bx bx-copyright"></i> 2022 Twitter, Inc
        </Link>
      </div>
    </div>
  );
};

export default Login;
