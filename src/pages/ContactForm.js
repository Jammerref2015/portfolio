import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import location from '../img/location.svg'
import Title from '../components/Title';

function ContactPage() {
    return (
       <div>
           <div className="title">
                <Title title= {'Contact Me'} span={'Contact Me'} />
           </div>
           <div className="ContactPage">
            {/* <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.3102704026746!2d-8.490218749222908!3d51.910050088904875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844906a76c66b3d%3A0x664cf01187e4db45!2s19%20Bantry%20Park%20Rd%2C%20Fairhill%2C%20Cork%2C%20T23%20C6X3%2C%20Ireland!5e0!3m2!1sen!2sfr!4v1626003119424!5m2!1sen!2sfr" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div> */}
            <div className="contact-sect">
                <ContactItem icon={phone} text1={"003343403"} text2={"44545"} title={'Phone'}/>
                <ContactItem icon={email} text1={"name@name.com"} text2={"44545"} title={'Email'}/>
                <ContactItem icon={location} text1={"003343403"} text2={"44545"} title={'Address'}/>
            </div>
        </div>
       </div>
    )
};

export default ContactPage;