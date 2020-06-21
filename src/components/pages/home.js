import React, { Component } from "react";

import ListArticles from './../../json/articles.json';

class Main extends Component {    
    callArticles(object){
        object = object.map((item,i) =>
                <a className="row article my-1" href={item.url} key={i}>
                    <div className="col-12 col-md-5 col-lg-4">
                        <img src={item.small} className="img-fluid" alt={item.name} />                            
                    </div>
                    <div className="col-12 col-md-7 col-lg-8 text-left">
                        <h4 className="title">{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                </a>
        );
        return object;
    }
    render() {
        var Articles = this.callArticles(ListArticles);
        return (
            <div>
                {Articles}
              <div className="row">
                  <nav className="col-12 offset-sm-1 offset-md-0 text-left alert-light">
                    <a className="alert-link" href="/blog">&laquo; Voir les articles précédents</a>
                  </nav>
                </div>
            </div>
          );
    }
}


export default Main;
