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

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', margin: 'auto' }}>

                <div className='left'>
                    <h3 style={{ color: 'gray' }}>Our Brands</h3>
                    <p>BMW</p>
                    <p>Toyota</p>
                    <p>Honda</p>
                    <p>Mitsubishi</p>
                    <p>Tesla</p>
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
                    <p>research & Development</p>
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
                <p> © <span>{new Date().getFullYear()}</span> Exertion Motor Co., Inc. All information contained herein applies to Bangladeshi products only.</p>

            </div>
        </div>
    );
};

export default Footer;