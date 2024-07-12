import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header>
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center py-4 g-5">
              <div className="col-12 col-md-6">
                <div className="text-center text-md-start">
                  <h1 className="display-md-2 display-4 fw-bold text-dark pb-2">
                    <span className="tts">URL</span>
                    <span className="ttc">Shortner</span> 
                  </h1>
                  <p className="lead">
                  URL shortening web Application . . This is achieved by using a redirect which links to the web page that technique on the World Wide Web in which a Uniform Resource Locator may be made substantially shorter and still direct to thes a long URL

                  </p>
                  <Link
                    to="/register"
                    className="btn butn fw-bold px-5 py-3 mt-3 fs-5"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="https://ps.w.org/link-shortener/assets/icon-256x256.png?rev=2323549"
                  alt="Url Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </header>
      <Footer />
    </div>
  );
};

export default Home;