import React from 'react';

import ListTeam from './../../json/team.json';
function Main() {
    var team = ListTeam.map((item,i) =>                             
                            <div className="col col-sm-6 col-lg-4 mb-4 p-2" key={i}>
                                <a className="equipe-link" href={item.name}>
                                    <div className="card">
                                        <img src={item.foto} className="card-img-top rounded-circle" alt={item.name} />
                                        <div className="card-title text-center">
                                            <h5 className="card-title title">{item.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{item.profession}</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
    );
  return (
    <div>
                        <div className="row mx-0 row-cols-1 row-cols-sm-2 row-cols-md-3">
                            {team}
                        </div>
						
    </div>
  );
}

export default Main;
