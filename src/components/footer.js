import React from "react";

function Header() {
        return (
            <footer>
                <div className="row mx-0 px-2 d-flex justify-content-center">
                    <div className="col-6 col-sm-3 col-md-3 col-lg-4 pb-3">
                        <h4 className="navbar-brand">catégories</h4>
                        <ul className="list-group text-left">
                            <li className="footer-list"><a href="#revues">revues</a></li>
                            <li className="footer-list"><a href="#recettes">recettes</a></li>
                            <li className="footer-list"><a href="#decouvertes">découvertes</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 col-md-3 col-lg-4 pb-3">
                        <h4 className="navbar-brand">archives</h4>
                        <ul className="list-group text-left">
                            <li className="footer-list"><a href="#2019">2019</a></li>
                            <li className="footer-list"><a href="#2018">2018</a></li>
                            <li className="footer-list"><a href="#2017">2017</a></li>
                        </ul>           
                    </div>
                    <div className="col-12 col-sm-5 col-md-5 col-lg-4 pb-3">
                        <ul className="list-group">
                            <li><h4 className="navbar-brand">newletter</h4></li>
                            <li>
                                <form className="form-inline">
                                    <div className="form-group mb-2">
                                    <input type="text" className="form-control" id="newletter_static" placeholder="Email..." autoComplete="email" required />
                                    </div>                           
                                    <button type="submit" className="btn btn-outline-light mb-2">S'inscrire</button>
                                </form>
                            </li>
                            <li><h4 className="navbar-brand">partager</h4></li>
                            <li>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-social"><i className="fab fa-facebook-square fa-2x"></i></button>
                                    <button type="button" className="btn btn-social"><i className="fab fa-instagram fa-2x"></i></button>
                                    <button type="button" className="btn btn-social"><i className="fab fa-youtube fa-2x"></i></button>
                                    <button type="button" className="btn btn-social"><i className="fab fa-twitter fa-2x"></i></button>
                                </div>
                            </li>
                        </ul>           
                    </div>
                </div>
            </footer>
        );
    
}

export default Header;
