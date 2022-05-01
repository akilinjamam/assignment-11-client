import React from 'react';
import './Footer.css'
import facebook from '../../../icon/facebook.png'
import messenger from '../../../icon/messenger.png'
import instagram from '../../../icon/instagram.png'
import youtube from '../../../icon/youtube.png'
import twitter from '../../../icon/twitter.png'
import linkedin from '../../../icon/linkedin.png'
import logo from '../../../img-logo-favicon/car-for-assignment-11.png'


const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(44, 40, 40)', padding: '20px' }}>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '90%', margin: 'auto' }}>

                <div className='left'>
                    <h3 style={{ color: 'gray' }}>Our Brands</h3>
                    <p>BMW</p>
                    <p>Toyota</p>
                    <p>Honda</p>
                    <p>Mitsubishi</p>
                    <p>Tesla</p>

                    <p>Lexus</p>

                </div>

                <div className='middle'>
                    <h3 style={{ color: 'gray' }}>About Us</h3>
                    <p>Power of Dreams</p>
                    <p>Mobility</p>
                    <p>Environment</p>
                    <p>Community</p>
                    <p>safety</p>
                    <p>History</p>
                    <p>Careers</p>
                </div>

                <div className='right'>
                    <h3 style={{ color: 'gray' }}>More to Explore</h3>
                    <p>Research & Development</p>
                    <p>Exertion in Bangladesh </p>
                    <p>Exertion WorldWide</p>
                    <p>Corporate Social Responsibility</p>
                    <p>Investor Relationship</p>
                    <p>Media Newsroom</p>
                </div>


            </div>
            <hr style={{ color: 'white' }} />

            <br /><br />

            <div>
                <img style={{ width: '40px', padding: '10px' }} src={facebook} alt="" />
                <img style={{ width: '40px', padding: '10px' }} src={messenger} alt="" />
                <img style={{ width: '40px', padding: '10px' }} src={youtube} alt="" />
                <img style={{ width: '40px', padding: '10px' }} src={instagram} alt="" />
                <img style={{ width: '40px', padding: '10px' }} src={twitter} alt="" />
                <img style={{ width: '40px', padding: '10px' }} src={linkedin} alt="" />
            </div>
            <div>
                <img style={{ width: '140px' }} src={logo} alt="" />
            </div>
            <div>
                <p> © <span>{new Date().getFullYear()}</span> Exertion Motor Co., Inc. All information contained herein applies to Worldwide products only.</p>

            </div>
        </div>
    );
};

export default Footer;




/* 

https://i.ibb.co/Gpm9ptJ/audi.jpg
https://i.ibb.co/D1f9Q6W/bentley.jpg
https://i.ibb.co/mS6n60X/bmw.jpg
https://i.ibb.co/mqyDtGV/buggatti.jpg
https://i.ibb.co/pjDYjNz/chevrolet.jpg
https://i.ibb.co/x3mfLkV/fiat.jpg
https://i.ibb.co/dmWpvqk/ford.jpg
https://i.ibb.co/HHH0S1D/honda.jpg
https://i.ibb.co/m0H8Lxy/jaguar.jpg
https://i.ibb.co/wpJQpxt/jeep.jpg
https://i.ibb.co/wS1Sttq/land-rover.jpg
https://i.ibb.co/7JKLNg9/lexus.jpg
https://i.ibb.co/nL4mfSg/marsadiz-benz.jpg
https://i.ibb.co/0CffqCd/mazda.jpg
https://i.ibb.co/jf7DtmB/nissan.jpg
https://i.ibb.co/qJL3NkR/porsche.jpg
https://i.ibb.co/3CXwJkX/roles-royes.jpg
https://i.ibb.co/k8xPqf3/tesla.jpg
https://i.ibb.co/dP8XGVm/volvo.jpg

*/