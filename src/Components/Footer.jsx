import React from "react";

const Footer = () => {
  return (
    <div className="container" style={{ backgroundColor: "#A5B2C5", width: "100%" }}>
      <footer className="py-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-row">
              <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#skills" className="nav-link p-0 text-body-secondary">Skills</a></li>
              <li className="nav-item mb-2"><a href="#projects" className="nav-link p-0 text-body-secondary">Projects</a></li>
              <li className="nav-item mb-2"><a href="#contact" className="nav-link p-0 text-body-secondary">Contact Me</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div className="col-md-6 mb-3">
            <form className="d-flex flex-column flex-sm-row w-100 gap-2">
              <div>
                <h5>Subscribe to get my newsletter</h5>
                <p>Monthly digest of what's new and exciting from me.</p>
              </div>
              <div className="d-flex gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
