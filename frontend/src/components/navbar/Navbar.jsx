import React from "react";
import "./Navbar.css";
import { FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>
              <FaThList /> &nbsp; todoo
            </b>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/todo">
                  To-do
                </Link>
              </li>

              {!isLoggedIn && (
                <>
                  <div className="d-flex">
                    <li className="nav-item mx-2 my-1">
                      <Link className="nav-link active btn-nav" aria-current="page" to="/signup">
                        SignUp
                      </Link>
                    </li>
                  </div>
                  <div className="d-flex ">
                    <li className="nav-item mx-2 my-0">
                      <Link className="nav-link active btn-nav" aria-current="page" to="/signin">
                        SignIn
                      </Link>
                    </li>
                  </div>
                </>
              )}

              {isLoggedIn && (
                <div className="d-flex ">
                  <li className="nav-item mx-2 my-1" onClick={logout}>
                    <Link className="nav-link active btn-nav" aria-current="page" to="/">
                      LogOut
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
