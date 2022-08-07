import React from 'react';
import '../styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedInIcon/> <YouTubeIcon/> <InstagramIcon/> <FacebookIcon/> <TwitterIcon/>
            </div>
        </div>
    )
}
