import React from "react";

let UserDeatails=(props)=>{

    return         <div><h6>UserDetails</h6>
                    <div className="card">
                    <div className="card-header">
                        <img src={props.user.image} alt=""/>
                    </div>
                    <div className="card-body">
                         <ul className="list-group">
                            <li className="list-group-item">{props.user.id}</li>
                            <li className="list-group-item">{props.user.firstName}</li>
                            <li className="list-group-item">{props.user.gender}</li>
                            <li className="list-group-item">{props.user.email}</li>

                            </ul>
                    </div>
                    </div>
                    </div>
}
export default UserDeatails