import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Logo from '../assets/images/logo.png'

export default class Header extends React.Component {  
    
    constructor(){
        super();
        this.state = {
            menuToggle : false
        }             
    }
    menuToggle = ()=> {    
        var menuToggle = !this.state.menuToggle;
        this.setState({
            menuToggle: menuToggle
        })                               
    }
    closeMenubar = ()=> {        
        $('nav .main-navigation li').on('click',() =>{            
            this.setState({
                menuToggle: false
            })    
        })
    }
        
     
    render() {          
        return(
        <>
        <header className="py-5" onLoad={this.closeMenubar}>
            <div className="custom-container">
                <div className="d-flex align-items-center">
                    <div className="logo order-1">
                       <a href="/"><img src={Logo} className="img-fluid" alt="Qause" /></a>
                    </div>                       
                     <nav className="order-3 order-sm-2">
                           <div className="login-nav d-flex align-items-center justify-content-between">
                              <div id="nav-icon1" className={this.state.menuToggle? 'menubar d-lg-none open' : 'menubar d-lg-none'} onClick={this.menuToggle}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                              </div>   
                              <ul className={this.state.menuToggle? 'd-sm-flex align-items-center main-navigation justify-content-center open' : 'd-sm-flex align-items-center main-navigation justify-content-center '}>
                                    <li><Link to="/">home</Link></li>
                                    <li><Link to="/about">about</Link></li>                                    
                                    <li><Link to="/login">login</Link></li>                                    
                                    <li><Link to="/join-us">join us</Link></li>                                    
                              </ul>                              
                           </div>
                        </nav>                    
                       <button className="ml-auto subitRequest order-2 order-sm-3">Submit Reques</button>                    
                </div>
            </div>           
        </header>
         {/* Navigation */}
        
        </>
        )
    }    
}
