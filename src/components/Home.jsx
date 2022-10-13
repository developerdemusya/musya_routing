import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



 function Home ()
{
    return(
    <div>
        <h2>home page</h2>
        <div className="whole">
        <div className="main"><i className={'fas fa-pen'} />
        welcome to my website
        </div>
        <div className="sidebar musya">
        <h1>Programmers Action</h1>
        <p className='pro'>Python programming notes 
Generally a high programming language of high level programming 
Printing in python 
1	print( )—used to print 
2	input(“used to input”)- for prompting user to input values or arguments 
	before using integer with other string it must be converted to string 
eg: my_no=5 
input(str(my_no)+ some character) 
	Inputing integer we use: 
Input(int(“the value”)) Eg input(int(5)); 
</p>
<button className='btn' >ReadMore</button></div>
        </div>
        <div className="footer"></div>
        
    </div>
    
    )
}
export default Home;