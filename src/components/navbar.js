import React, { Component } from "react";
//<p className="Header-intro">{this.state.apiResponse}</p>
class NavBar extends Component {
    callMenu(arrqy){
        arrqy.forEach((item) => {
            console.log(item);
            if( window.location.pathname === item.url){ 
                item.class = item.class + " active";
                item.sr_only = <span className="sr-only">(current)</span>
             }
        });

        arrqy = arrqy.map((item,i) =>
            <li className={item.class} key={i}>
                <a 
                className="nav-link" 
                href={item.url} 
                target="_self"
                rel="noopener noreferrer"
                >{item.name}{item.sr_only}</a> 
            </li>
        );

        return arrqy;
    }
    render() {
        var list = [
            {"name":"accueil","url":"/","class":"nav-item","sr_only":""},
            {"name":"equipe","url":"/equipe","class":"nav-item","sr_only":""},
            {"name":"blog","url":"/blog","class":"nav-item","sr_only":""},
            {"name":"contact","url":"/contact","class":"nav-item","sr_only":""}
        ];
        list = this.callMenu(list);
        return (
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top">        
            <a className="navbar-brand" href="/">cui'zine</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                {list}
                </ul>
            </div>
        </nav>
        );
    }
}

export default NavBar;
