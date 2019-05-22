import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Particles from "react-particles-js";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  const particleOpt = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      },
      move: {
        enable: true,
        speed: 1
      },
      opacity: {
        value: 1,
        random: true
      },
      line_linked: {
        enable: true
      },
      size: {
        value: 3
      }
    }
  };
  return (
    <section className="landing">
      <div>
        <Particles params={particleOpt} />
      </div>
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">DevGram</h1>
          <p className="lead">
            Create a developer profile, share posts and get support from other
            developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Register{" "}
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
