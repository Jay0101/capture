import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We Work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography and videography idea that you have. We have professionals with amazing skills to help you achieve it.</p>
                <button>Contact US</button>
            </div>
            <div className="image">
                <img src={home1} alt="Guy with a Camera"/>
            </div>
        </div>
    )

}

export default AboutSection;