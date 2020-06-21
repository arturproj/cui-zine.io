import React, { Component } from "react";

import ListRecettes from './../../json/recipes.json';
import ListArticles from './../../json/articles.json';
class Page extends Component {
    callRecettes(object){
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
        var Recettes = this.callRecettes(ListRecettes);
        var Articles = this.callArticles(ListArticles);
        return (            
            <div>
                <hr />
                    <h3>Recettes</h3>
                <hr />
                    {Recettes}
                <hr />
                    <h3>Articles</h3>
                <hr />        
                    {Articles}
            </div>
        );  
    }
}


export default Page;
