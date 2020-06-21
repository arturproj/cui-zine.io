import React, { Component } from "react";

import SiderBar from './components/siderbar.js';
import './assets/css/article.css';

import ListRecettes from './json/recipes.json';
import ListArticles from './json/articles.json';
import All from './json/all.json';

import BLOGREC from './components/pages/recette';
import BLOGART from './components/pages/article';
import BLOGALL from './components/pages/blog_all';

class Page extends Component {

    checkParm(param){
        let params = [];
        window.location.search.slice(1).split('&').forEach(elm=>{
        if (elm !== '') {
            let spl = elm.split('=');
            params[spl[0]] = (spl.length >= 2 ? decodeURIComponent(spl[1]) : true);
        }
        });
        //console.log(param +" checkParm[param]",params[param]);
        // Example (with the URL 'https://example.com/?user=bar&qux=tmp&login'):    
        return ( typeof params[param] !== 'undefined' ? true:false);        
    }
    
    getParm(param){
        let params = [];
        window.location.search.slice(1).split('&').forEach(elm=>{
        if (elm !== '') {
            let spl = elm.split('=');
            params[spl[0]] = (spl.length >= 2 ? decodeURIComponent(spl[1]) : true);
        }
        });
        //console.log(param +" getParm[param]",params[param]);
        // Example (with the URL 'https://example.com/?user=bar&qux=tmp&login'):    
        return ( typeof params[param] !== 'undefined' ? params[param]:false);
        //console.log("params[param]",typeof params[param]);
    }

    getJSON(obj,param){
        for (const property in obj) {
            if( obj[property]['id'] === param ){
                this.item = (obj[property]);
                return this.item;
            }
            
          }
          return false;
    }

    View(intro) {       
        if ( this.checkParm("article") === true ) {
            return (<BLOGART intro={intro} />);
        }else if ( this.checkParm("recipe") === true ) {
            return (<BLOGART intro={intro} />);
        } else {
            return (<BLOGALL/>);
        }
    }

    render() {
        var res = {
            _id:"",
            "name":"Cui'zine",
            "url":"/header.jpg",
            "small":"/header.jpg",
            "header":"/header.jpg",
            "description":"",
            "subtitle":"blog"
        };
        if ( this.checkParm("article") === true ) {
            res = this.getJSON(All,this.getParm("article"))
        }
        if ( this.checkParm("recipe") === true ) {        
            res = this.getJSON(All,this.getParm("recipe"))
        }
        //var image_header = {backgroundImage: `${image_header}`,height:"50vh"}"url("+res.header+")";
        //console.log('res',res)
        var image_header = {
            backgroundImage: "url("+res.header+")",
            height:"50vh",
        };
        return (            
            <div>                
                <header style={image_header}>
                    <div className="header-filter d-flex justify-content-center align-items-center flex-column">
                        <h1 className="title tit_eql">{res.name}</h1>
                        <h2 className="pro_eql">{res.subtitle}</h2>
                    </div>
                </header>

                <main>
                    <div className="card">
                        <div className="card-body text-center"> 
                            <div className="row">

                                <div className="col-12 col-md-12 col-lg-9">
                                    {this.View(res.description)}
                                </div>

                                <div className="d-none d-lg-block col-12 col-md-12 col-lg-3 pt-3">
                                    <SiderBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>        
            </div>
        );  
    }
}


export default Page;
