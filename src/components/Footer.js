import React from 'react';
import footerImg from '../assets/images/footer-children-img.png'
import footerLogo from '../assets/images/footer-logo.jpg'
export default function Footer() {
    return (
        <footer>
           <div className="text-right pl-4 p-lg-0">
               <img src={footerImg} className="ml-auto img-fluid"/>
           </div>
           <div className="footer-content">
               <div className="row">
                  <div className="col-lg-3 col-sm-4">
                     <div className="mb-5">
                        <h4 className="text-white fw600 mb-4 fz18">Phone</h4>
                        <a href="tel:9191919191" className="custom-primary-color">+91 9191919191</a>
                     </div>
                     <div className="mb-5 pt-5">
                        <h4 className="text-white fw600 mb-4 fz18">Email</h4>
                        <a href="mailto:salluk71@gmail.com" className="custom-primary-color">salluk71@gmail.com</a>
                     </div>
                     <div className="subcribeToUs mb-5 mb-sm-0">
                        <h4 className="text-white fw600 fz16">Su8scribe to us</h4>
                        <div className="form-group">
                           <input type="text" className="form-conrol bg-transparent w-100"/>
                           <button><i className="fa fa-arrow-right"></i></button>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-2  col-sm-4 offset-lg-1 mt-5 followUsLinks">
                     <div className="mb-5">
                        <h4 className="text-white fw600 fz18">Follow Us</h4>
                        <div className="social-media">
                           <a href=""><i className="fa fa-facebook"></i></a>
                           <a href="" className="mx-5"><i className="fa fa-instagram"></i></a>
                           <a href=""><i className="fa  fa-youtube-play"></i></a>
                        </div>
                     </div>
                     <div className="pt-5">
                        <h4 className="text-white fw600 mb-4 fz18">Quick Links</h4>
                        <a href="#" className="custom-primary-color d-block mb-4">Join Us</a>
                        <a href="#" className="custom-primary-color d-block mb-4">About Us</a>
                        <a href="#" className="custom-primary-color d-block mb-4">Career</a>
                        <a href="#" className="custom-primary-color d-block mb-4">   NGO's in india</a>
                     </div>
                  </div>
                  <div className="col-lg-4 col-sm-4 offset-lg-2 footerLogo">
                     <img src={footerLogo} alt="" className="mb-5"/>
                     <p className="text-white fz14 pt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos distinctio quod quaerat tempore debitis, voluptatem repellat fugit dolorum quia quo recusandae atque illo molestias possimus magnam non eum magni hic?</p>

                  </div>
               </div>
           </div>
        </footer>
    )
}
