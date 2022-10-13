import React,{useState} from 'react';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css'


 function Product ()
{
const [count,setCount]= useState(2);

function handleClick ()
{
    setCount (prev=>prev+1)
        
        
}
function handleClick2()
{
    setCount(prev=>prev-2)
}

    return(
        <div>
            <div className='Product'>Product page</div>
            <h2> input your favourite number {count} </h2>
            <button className='btn-primary btn-danger mx-4 my-5' onClick={handleClick}>add</button>
            <button className='btn-secondary btn-success' onClick={handleClick2}>subtract</button>
            <div className='items'>
                <div className='item1' >
                    <img src="/web/mannuh1.jpg" alt='no one'/>
                    <h2>welcome here we sell products at price worthy your pocket</h2>

                </div>
                <div className='item2'>
                <h2>welcome here we sell products at price worthy your pocket</h2>

                </div>
            </div>
            <h1>select best favourite fruit <select>
                <option>mango&#128540;</option>
                <option>melon,&#128543;</option>
                <option>orange,&#128685;</option>
                <option>avocado,&#12851;</option>
                <option>lemon, &#128525;</option>
            </select> <h1>&#128540;
&#128541;

</h1></h1>
            


        </div>
    )
}
export default Product;