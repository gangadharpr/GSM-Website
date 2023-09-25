import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home/Home'
import Product from './Product/Product'
import Hike from './Employee/Hike'
import CompA from './Components/CompA'
import Message from './Message/Message-3'
import Message2 from './Employee/Message2'
import Employee from './Employee/Employee/Employee'
import Login from './Login/Login'
import ETApp from './ET/ETApp'
import Digital from './Digital/Digital'
import ProductApp from './ProductApp/ProductApp'
import ContactApp from './ContactApp/ContactApp'
import UserApp from './Users/UserApp'
import ToDo from './ToDo/ToDo'

let App=()=>{
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/ETAPP" element={<ETApp />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Digital" element={<Digital />} />
                        <Route path="/Product" element={<Product />} />
                        <Route path="/Employee" element={<Employee />} />
                        <Route path="/Hike" element={<Hike />} />
                        <Route path="/Message2" element={<Message2/>} />
                        <Route path="/Message" element={<Message/>}/>
                        <Route path="/CompA" element={<CompA/>}/>
                        <Route path="/UserApp"  element={<UserApp/>}/>
                        <Route path="/ProductApp"  element={<ProductApp/>}/>
                        <Route path="/ContactApp"  element={<ContactApp/>}/>
                        <Route path="/ToDo"  element={<ToDo/>}/>
                     </Routes>
                </Router>
            </div>
        )
    }

export default App
