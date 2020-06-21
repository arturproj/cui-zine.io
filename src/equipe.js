import React from 'react';

import SiderBar from './components/siderbar.js';
import Equipe from './components/pages/equipe';
import Biograf from './components/pages/biograf';
import './assets/css/equipe.css';

function checkParm(param){
    let params = [];
    window.location.search.slice(1).split('&').forEach(elm=>{
    if (elm !== '') {
        let spl = elm.split('=');
        params[spl[0]] = (spl.length >= 2 ? decodeURIComponent(spl[1]) : true);
    }
    });

    // Example (with the URL 'https://example.com/?user=bar&qux=tmp&login'):    
    return ( typeof params[param] !== 'undefined' ? true:false);
    //console.log("params[param]",typeof params[param]);
}
function getParm(param){
    let params = [];
    window.location.search.slice(1).split('&').forEach(elm=>{
    if (elm !== '') {
        let spl = elm.split('=');
        params[spl[0]] = (spl.length >= 2 ? decodeURIComponent(spl[1]) : true);
    }
    });

    // Example (with the URL 'https://example.com/?user=bar&qux=tmp&login'):    
    return ( typeof params[param] !== 'undefined' ? params[param]:false);
    //console.log("params[param]",typeof params[param]);
}

function View() {
    var image = "/team/"+getParm("tech")+".jpg"
    return ( checkParm("tech") === true && checkParm("prof") === true ?  <Biograf image={image} /> :  <Equipe />);
}
var title = (function () {
    if ( checkParm("tech") === true){
        return  getParm("tech");
    }else{
        return 'on apprend en enseignant';
    }
});
var subtitle = (function () {
    if ( checkParm("prof") === true ){
        return  getParm("prof");
    }else{
        return  'un pour tous et tous pour un';
    }
});
function Page() {
        return (            
            <div>                
                <header style={{backgroundImage: "url(/team/team.jpg)",height:"calc( 100vh - 81px )"}}>
                    <div className="header-filter d-flex justify-content-center align-items-center flex-column">
                        <h1 className="title tit_eql">{title()}</h1>
                        <h2 className="pro_eql">{subtitle()}</h2>
                    </div>
                </header>

                <main>
                    <div className="card">
                        <div className="card-title m-0 text-center text-capitalize">
                            <h3>notre équipe</h3>
                        </div>
                    <hr/>
                        <div className="card-body text-center"> 
                            <div className="row">

                                <div className="col-12 col-md-12 col-lg-9">
                                    <View />
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

export default Page;
