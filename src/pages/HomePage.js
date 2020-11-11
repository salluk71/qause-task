import React, { Component } from 'react'
import volunteer from '../assets/images/general-icon.jpg'
import ngo from '../assets/images/volunteer-icon.jpg'
import guru from '../assets/images/passion-guru-icon.jpg'
import ngoOppr from '../assets/images/ngo-opportunities.jpg'
import U_Logo from '../assets/images/contact-us.jpg'
import $ from 'jquery'

export default class HomePage extends Component {
   componentDidMount(){     
      $('.custom-accordian .item h3').on('click' , function(){
         $(this).next('.slideContent').slideToggle();
         $(this).toggleClass('active');
         $('.slideContent').not($(this).next('.slideContent')).slideUp();
         $('.custom-accordian .item h3').not($(this)).removeClass('active');
      })
      
   }
   render() {
      return (
         <>
            <section className="askQuestion">
               <div className="container">
                  <div className="askQuestionSearch">
                     <h1 className='fz48 fw600 text-center custom-primary-color'>Hello, how can we help ?</h1>
                     <div className="search-box">
                        <input type="search" placeholder="Ask Question"/>
                        <button>Search</button>
                     </div>
                     <p className="text-center fz16">or choose  a category  to quickly find the help you need</p>
                  </div>
                  <div className="categorySearch ">
                     <div className="row">
                        <div className="col-sm-3 col-6 mb-5 mb-sm-0" >
                           <div className="categorySearchItem">
                              <a href="#">
                                 <figure className="text-center">                                 
                                    <img src={volunteer} alt=""/>
                                    <figcaption>Volunteer</figcaption>
                                 </figure>
                              </a>
                           </div>
                        </div>
                        <div className="col-sm-3 col-6 mb-5 mb-sm-0" >
                           <div className="categorySearchItem">
                              <a href="#">
                                 <figure className="text-center">
                                    <img src={ngo} alt=""/>
                                    <figcaption>NGO</figcaption>
                                 </figure>
                              </a>
                           </div>
                        </div>
                        <div className="col-sm-3 col-6 mb-5 mb-sm-0" >
                           <div className="categorySearchItem">
                              <a href="#">
                                 <figure className="text-center">
                                    <img src={guru} alt=""/>
                                    <figcaption>Passion Guru</figcaption>
                                 </figure>
                              </a>   
                           </div>
                        </div>
                        <div className="col-sm-3 col-6 mb-5 mb-sm-0" >
                           <div className="categorySearchItem">
                              <a href="#">
                                 <figure className="text-center">
                                    <img src={volunteer} alt=""/>
                                    <figcaption>General</figcaption>
                                 </figure>
                              </a>   
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="ngo-opportunity text-center common-section">
               <div className="container">
                  <img src={ngoOppr} alt=""/>
                  <h2 className="fz36 fw700 custom-secondary-color my-5">Ngo Opportunities</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatem architecto iusto magni repellat ducimus atque suscipit dolore incidunt provident! Fuga, reiciendis. Incidunt mollitia autem obcaecati consectetur ducimus doloremque molestiae.</p>
               </div>
            </section>

            <section className="common-section">
               <div className="container">
               <div className="custom-accordian">
                  <div className="item">
                     <h3 className="active">How Can an NGO Apply Assistance?</h3>
                     <div className="slideContent active">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur incidunt dolor alias sit recusandae aut quas ea animi dicta. Maxime dolore molestiae praesentium. Nemo repellat voluptate perspiciatis atque iste?</p>
                     </div>                     
                  </div>
                  <div className="item">
                     <h3>How Can an NGO Apply Assistance?</h3>
                     <div className="slideContent">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur incidunt dolor alias sit recusandae aut quas ea animi dicta. Maxime dolore molestiae praesentium. Nemo repellat voluptate perspiciatis atque iste?</p>
                     </div>                     
                  </div>
                  <div className="item">
                     <h3>How Can an NGO Apply Assistance?</h3>
                     <div className="slideContent">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur incidunt dolor alias sit recusandae aut quas ea animi dicta. Maxime dolore molestiae praesentium. Nemo repellat voluptate perspiciatis atque iste?</p>
                     </div>                     
                  </div>
                  <div className="item">
                     <h3>How Can an NGO Apply Assistance?</h3>
                     <div className="slideContent">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur incidunt dolor alias sit recusandae aut quas ea animi dicta. Maxime dolore molestiae praesentium. Nemo repellat voluptate perspiciatis atque iste?</p>
                     </div>                     
                  </div>
               </div>
               </div>
            </section>

            <section className="common-section contactUS">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-sm-6 pr-xl-5">
                        <img src={U_Logo} className="img-fluid" alt=""/>
                     </div>
                     <div className="col-sm-6 pl-xl-5 mt-5 mt-sm-0 pt-5 pt-sm-0">
                        <h3 className="custom-primary-color fz40 fw600 mb-5">Contact Us</h3>

                        <form action="" className="pt-sm-5">
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Name*"/>
                           </div>
                           <div className="form-group">
                              <input type="phone" className="form-control" placeholder="Mobile No.*"/>
                           </div>
                           <div className="form-group">
                              <input type="email" className="form-control" placeholder="Email Id"/>
                           </div>
                           <div className="form-group">
                              <textarea rows="7" className="form-control" placeholder="Your Message"></textarea>
                           </div>
                           <div className="form-group mt-5 pt-5">
                              <button className="custom-primary-btn">Submit</button>
                           </div>

                        </form>
                     </div>
                  </div>
               </div>
            </section>
         </>
      )
   }
}
