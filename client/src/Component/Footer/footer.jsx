import React from "react";
import "../../App.css";

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft float-start ml-24 "
                data-wow-delay="0.2s"
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Get in Touch
                </h3>
                <p>Don’t miss any Oppertunity.!</p>
                <form
                  action="#"
                  className="f_subscribe_two mailchimp"
                  method="post"
                  noValidate
                >
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="Email"
                  />
                  <button className="btn btn_get btn_get_two" type="submit">
                    Subscribe
                  </button>
                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  ></p>
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  ></p>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 float-left ml-60">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                <h3 className="f-title f_600 t_color f_size_18">Pages</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Practice</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 float-left ml-60">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Term &amp; conditions</a>
                  </li>
                  <li>
                    <a href="#">Reporting</a>
                  </li>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Support Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft float-left ml-24"
                data-wow-delay="0.8s"
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Team Solutions
                </h3>
                <div className="f_social_icon">
                  <a href="#" className="fab fa-facebook"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                  <a href="#" className="fab fa-pinterest"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7 order-lg-1 order-2">
              <p className="mb-0 f_400 text-center">
                © BeyondClassroom Inc.. 2024 All rights reserved.
              </p>
            </div>
            {/* <div className="col-lg-6 col-sm-5 text-right order-lg-2 order-1">
              <p>
                Made with <i className="icon_heart"></i> in{" "}
                <a
                  href="http://BeyondClassroom.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  BeyondClassroom
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
