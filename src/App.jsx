import React from "react";

import './App.css';
import NavLink from "./NavLink";
import {BrowserRouter as Router} from 'react-router-dom';
import GetTime from "./clock";






 function App() {
    
   
     
    
    return(
        <Router>
            
            <div>
        
        <div className="header">
       
                      
       <h3 className="first">Emmauel musya site  </h3>
       <div className="logo">
        <div className="image"> 
        
        </div>
        
        
        </div>
       </div><GetTime/><div className="heads"> <NavLink/>
        </div> 
        <marquee >welcome to emmanuel musya site</marquee> 
        </div>

      </Router>
    )
    
}
export default App
