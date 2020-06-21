import React from 'react';

import SiderBar from './components/siderbar.js';
import Main from './components/pages/home';
import './assets/css/index.css';

function Page() {
        return (            
            <div>
                <header style={{backgroundImage: "url(/header.jpg)",height:"calc( 100vh - 81px )"}}>
                    <div className="header-filter d-flex justify-content-center align-items-center flex-column text-capitalize">
                        <img id="header-logo" className="mx-auto" src="/logo_square_white.png" width="100" height="100" alt="logo cui'zine"/>               
                        <h1 >cui'zine</h1>
                        <h1>le mag cuisine</h1>
                    </div>
                </header>

                <main>
                    <div className="card">
                        <div className="card-title m-0 text-center text-capitalize">
                        <h3>dernier article</h3>
                        </div>
                    <hr/>
                        <div className="card-body text-center"> 
                            <div className="row">

                                <div className="col-12 col-md-12 col-lg-9">
                                    <Main />
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
