import React, {Component}from 'react';
import { Routes,Route,Link} from 'react-router-dom';
import Product from './components/Product';
import Home from './components/Home';
import Service from './components/Service';
import Blog from './components/Blog';



import './App.css';

class NavLink extends Component
{
    render()
    {
    return(
        <div>
             <ul className="lists">
                 <nav className='list'>
                    
                  < Link className="Link" to='/'> Home</Link> 
                    
                < Link className="Link" to='/components/Product'>Product</Link>

                < Link className="Link"to='/components/Blog'>Blog</Link>
                < Link className="Link" to='/components/Service'>Service</Link> </nav>
                </ul>
            
              <Routes>
                        
                   <Route path ='/' element={< Home />}>
                    </Route>
                    <Route path="/components/Product" className="list" element ={<Product/>}></Route>
                    {/* <Route path ='/component/Contact' className="list" element={<Contact/>}> </Route> */}
                    <Route path='/components/Blog' className="list" element={<Blog />}></Route>
                    <Route path ='/components/Service' className="list" element={< Service/>}> </Route>
                   </Routes>
                

            </div>
    )
}
}
export default NavLink;