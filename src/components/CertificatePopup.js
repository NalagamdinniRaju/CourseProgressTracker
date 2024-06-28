import Popup from 'reactjs-popup';
import React from 'react';
import '../styles.css';

const overlayStyle = {
  backgroundColor: 'rgb(0, 0, 0, 0.5)',
};

const certificateImage = "https://imagetolink.com/ib/soGyQg0GzD.png";

const CertificatePopup = () => (
  <Popup
    modal
    trigger={<button type="button" className="certificate-btn">Get Certificate</button>}
    overlayStyle={overlayStyle}
  >
    {close => (
      <div className="popup-card">
        <button className="close-btn" onClick={close}>X</button>
        <img src={certificateImage} alt="Certificate" className="certificate-image" />
      </div>
    )}
  </Popup>
);

export default CertificatePopup;
