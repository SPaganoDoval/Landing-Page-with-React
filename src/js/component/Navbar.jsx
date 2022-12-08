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
                     <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </div>
    );
    
};
export default Navbar;
