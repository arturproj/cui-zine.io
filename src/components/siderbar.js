import React from "react";
import "./../assets/css/siderbar.css";

function SiderBar(){
        return (
            <div>
              <form>
                  <div className="form-group mb-2">
                      <label htmlFor="rechatche_static">rechatche</label>
                      <input type="text" className="form-control" id="rechatche_static" placeholder="Email..." autoComplete="email" required />
                  </div>                           
                  <button type="submit" className="btn btn-light btn-sm btn-block w-100 mb-2">S'inscrire</button>
              </form>
              <form>
                  <div className="form-group mb-2">
                      <label htmlFor="newletter_static">newletter</label>
                      <input type="text" className="form-control" id="newletter_static" placeholder="Email..." autoComplete="email" required />
                  </div>                           
                  <button type="submit" className="btn btn-light btn-sm btn-block w-100 mb-2">S'inscrire</button>
              </form>
              <label htmlFor="partager_static">partager</label>
              <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-social"><i className="fab fa-facebook-square fa-2x"></i></button>
                  <button type="button" className="btn btn-social"><i className="fab fa-instagram fa-2x"></i></button>
                  <button type="button" className="btn btn-social"><i className="fab fa-youtube fa-2x"></i></button>
                  <button type="button" className="btn btn-social"><i className="fab fa-twitter fa-2x"></i></button>
              </div>
            </div>
        );
    
}

export default SiderBar;
