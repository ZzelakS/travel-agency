import React from 'react';

const Footer = () => (
  <div>
    <footer className="page-footer text-center font-small mdb-color darken-2 mt-4 wow fadeIn">
      <div className="pt-4">
        <a className="btn btn-outline-white" href="/" role="button">
          Contact Us
          <i className="fa fa-download ml-2" />
        </a>
        <a className="btn btn-outline-white" href="/" role="button">
          About Us
          <i className="fa fa-graduation-cap ml-2" />
        </a>
      </div>

      <hr className="my-4" />

      <div className="pb-4">
        <a href="/">
          <i className="fa fa-facebook mr-3" />
        </a>

        <a href="/">
          <i className="fa fa-twitter mr-3" />
        </a>

        <a href="/">
          <i className="fa fa-youtube mr-3" />
        </a>

        <a href="/">
          <i className="fa fa-google-plus mr-3" />
        </a>

        <a href="/">
          <i className="fa fa-dribbble mr-3" />
        </a>

        <a href="/">
          <i className="fa fa-pinterest mr-3" />
        </a>

        <a href="https://github.com/uanoob" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github mr-3" />
        </a>

        <a href="/">
          <i className="fa fa-codepen mr-3" />
        </a>
      </div>

      <div className="footer-copyright py-3">
        © 2018 Copyright:
        <a href="/"> Travel Agency </a>
      </div>
    </footer>
  </div>
);

export default Footer;
