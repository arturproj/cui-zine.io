import React from 'react';

import SiderBar from './components/siderbar.js';

import './assets/css/contact.css';

function Page() {
        return (            
            <div>                
                <header style={{backgroundImage: "url(/header.jpg)",height:"60vh"}}>
                    <div className="header-filter d-flex justify-content-center align-items-center flex-column text-capitalize">
                        <img id="header-logo" className="mx-auto" src="/logo_square_white.png" width="100" height="100" alt="logo cui'zine"/>               
                        <h1 >cui'zine</h1>
                        <h1>le mag cuisine</h1>
                    </div>
                </header>

                <main>
                    <div className="card">
                        <div className="card-body text-center"> 
                            <div className="row">

                                <div className="col-12 col-md-12 col-lg-9">
                                <address className="title">
                                    <h3>Address</h3>
                                    <h4>5 Parvis Alan Turing</h4>
                                    <h4>75013 Paris</h4>
                                </address>
                                <iframe 
                                title="GoogleMapFrame" 
                                style={{width: "100%",height:"40vh",border:0}} 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.273342913379!2d2.3691563150864043!3d48.833924610384074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67221f7d549bd%3A0x2f835325a23c072d!2s5%20Parvis%20Alan%20Turing%2C%2075013%20Paris!5e0!3m2!1sit!2sfr!4v1591372526755!5m2!1sit!2sfr" 
                                frameBorder="0" 
                                allowFullScreen=""
                                 aria-hidden="false" 
                                 tabIndex="0" />
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
