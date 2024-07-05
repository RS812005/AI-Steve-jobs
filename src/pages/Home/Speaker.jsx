import React from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Speaker.css';

const Speaker = () => {
  return (
    <>
    <Link to="/chatbot">Go to Chatbot</Link>
      <div className="card__container ">
        <div className="card" style={{ maxWidth: '540px', margin: '20px auto', padding: '20px' }}>
          <div className="text-center">
            <img src="https://images.ctfassets.net/p15sglj92v6o/1s24tuU1dL9Vymh2Cjbb5w/ece71dc0300d0a5e8b8edef1ee1c96b4/steve-jobs.jpg" className="img-fluid" alt="Steve Jobs" style={{ width: 'auto', maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="card-body text-center">
            <h3 className="card-title">Steve Jobs <span className="badge bg-warning text-dark">G</span></h3>
            <p className="card-subtitle mb-2 text-muted">Co-founder, Apple Inc. Founder, NeXT</p>
            <p className="card-text">
              Steven Paul Jobs (1955-2011) was an American entrepreneur, inventor, and co-founder of Apple Inc., NeXT, and Pixar. Known for pioneering the personal computer revolution with Steve Wozniak, Jobs was instrumental in developing the Apple I, Apple II, and Macintosh. After leaving Apple in 1985, he founded NeXT and helped establish Pixar. Jobs returned to Apple in 1997, revitalizing the company with innovative products like the iMac, iPod, iPhone, and iPad. Diagnosed with pancreatic cancer in 2003, he passed away in 2011.
            </p>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Speaker;
