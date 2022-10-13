import React from "react";

// function getTime ()
// {
//     return( new Date()).toLocaleTimeString()
// }
const morn =
{
 color:'yellow',
 backgroundColor:'black',
 fontSize:'40px',
}
const after  =
{
 color:'green',
 backgroundColor:'black',
 fontSize:'40px',
}
const even =
{
 color:'red',
 backgroundColor:'black',
 fontSize:'40px',
}
const night =
{
 color:'pink',
 backgroundColor:'black',
 fontSize:'40px',
}

const GetTime = () =>
{
    const date= new Date();
    const hours = date.getHours();
     let timeOfDay;

     if (hours <12)
     {
         timeOfDay = 'morning';
         return(
             <div>
                 <h2 style={morn}>good {timeOfDay} programmer welcome </h2>
             </div>
         );
     }
     else if (hours >12 && hours <16)
     {
         timeOfDay = 'afternoon';
         return(
             <div>
                 <h2 style={after}>good {timeOfDay} programmer welcome</h2>
             </div>
         );
     }
     else if (hours >16 && hours <20)
     {
         timeOfDay = 'evening';
         return(
             <div>
                 <h2 style={even}>good {timeOfDay} programmer welcome</h2>
             </div>
         );
     }
     else
     {
         timeOfDay = 'night';
         return(
             <div>
                 <h2 style={night}>good {timeOfDay} programmer welcome</h2>
             </div>
         );
     }
}
export default GetTime;

