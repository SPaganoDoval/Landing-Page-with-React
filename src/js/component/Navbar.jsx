import React from "react";
import PropTypes from "prop-types";


function Navbar (props) {
    return ( 
        <div>
             
            <ul class="nav justify-content-end">
                 <li class="nav-item">
                     <a class="nav-link home" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Contact</a>
                </li>
            </ul>
        </div>
    );
    
};
export default Navbar;
