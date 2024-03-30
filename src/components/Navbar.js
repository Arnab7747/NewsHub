import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position: "fixed", width: "100%", zIndex: 1000}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              News Hub
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        {/* Add padding to the content below the navbar to prevent it from being hidden behind the fixed navbar */}
        <div style={{ paddingTop: "56px" }}>
          {/* Replace "56px" with the height of your navbar */}
          {/* Your page content goes here */}
        </div>
      </div>
    );
  }
}

export default Navbar;
