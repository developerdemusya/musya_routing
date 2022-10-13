import React from 'react';


const morning =
{
    color:'blue',
    backgroundColor:'pink',
    fontSize:'40px'
};
const afternoon =
{
    color:'green',
    backgroundColor:'pink',
    fontSize:'40px'
};
const evening=
{
    color:'brown',
    backgroundColor:'pink',
    fontSize:'40px'
};
const night =
{
    color:'red',
    backgroundColor:'pink',
    fontSize:'40px'
}
const GetTime = () =>
{
 const date = new Date();
 const hours =date.getHours();
  let timeOfDay;

 if (hours <12)
 {
     timeOfDay ='morning';
     return(
         <div>
             <h2 style={morning}> good {timeOfDay} programmer</h2>
         </div>
     );
 }
 else if (hours >12 && hours <16)
 {
     timeOfDay ='afternoon';
     return(
         <div>
             <h2 style={afternoon}> good {timeOfDay} programmer</h2>
         </div>
     );
 }
 else if (hours >16 && hours <19)
 {
     timeOfDay ='evening';
     return(
         <div>
             <h2 style={evening}> good {timeOfDay} programmer </h2>
             
         </div>
     );
 }
 else
 {
     timeOfDay ='night';
     return(
         <div>
             <h2 style={night}> good {timeOfDay} programmer</h2>
             
         </div>
     );
     }
}

export default GetTime;