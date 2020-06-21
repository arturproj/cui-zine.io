import React, { Component } from "react";

class Main extends Component  {
  constructor(props) {
    super(props);
    this.image = props.image;
  }
  render(){
    return (
      <div>
                            <div className="text-justify text-left">
                                  <img id="avatar" src={this.image} className="img-fluid card-img-left rounded-circle float-left mr-3 mb-3" alt="Avatar" width="200" />
                                                              
                                      Lorem Ipsum is simply dummy text of the printing and 
                                      typesetting industry. Lorem Ipsum has been the industry's 
                                      standard dummy text ever since the 1500s, when an unknown 
                                      printer took a galley of type and scrambled it to make a 
                                      type specimen book. 
                                      <br/><br/>
                                      It has survived not only five centuries, 
                                      but also the leap into electronic typesetting, remaining 
                                      essentially unchanged. It was popularised in the 1960s 
                                      with the release of Letraset sheets containing Lorem Ipsum 
                                      passages, and more recently with desktop publishing software 
                                      like Aldus PageMaker including versions of Lorem Ipsum.
                                      <br/><br/>
                                      Lorem Ipsum is simply dummy text of the printing and 
                                      typesetting industry. Lorem Ipsum has been the industry's 
                                      standard dummy text ever since the 1500s, when an unknown 
                                      printer took a galley of type and scrambled it to make a 
                                      type specimen book. 
                                      <br/><br/>
                                      It has survived not only five centuries, 
                                      but also the leap into electronic typesetting, remaining 
                                      essentially unchanged. It was popularised in the 1960s 
                                      with the release of Letraset sheets containing Lorem Ipsum 
                                      passages, and more recently with desktop publishing software 
                                      like Aldus PageMaker including versions of Lorem Ipsum.                              
          
                              </div>
      </div>
    );
  }
}

export default Main;
