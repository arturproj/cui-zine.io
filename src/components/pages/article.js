import React, { Component } from "react";

class Page extends Component {
    render() {
        const {intro} = this.props;
        return (            
            <div className="row row-cols-1 mx-0 text-left">
                <div className="col">
                    <h3 className="title">
                        intro
                    </h3>
                    <p className="intro">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. */}
                        {intro}
                    </p>
            
                </div>
                <div className="col">
                    <h3 className="title">
                        Developement
                    </h3>
                    <p className="prop">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <p className="prop">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <p className="prop">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <p className="prop">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
            
                </div>
                <div className="col">
                    <h3 className="title text-left">
                        Conclusion
                    </h3>
                    <p className="prop">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
            
                </div>
            </div>
        );  
    }
}


export default Page;
