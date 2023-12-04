import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'; // Import your custom stylesheet

const buttonData = [
  {
    label: 'Google Cloud',
    className: 'custom-button', // Apply custom class
  },
  {
    label: 'Web Development',
    className: 'custom-button', // Apply custom class
  }, 
  {
    label: 'Mobile Application',
    className: 'custom-button', // Apply custom class
  }, 
  {
    label: 'UI/UX Design',
    className: 'custom-button', // Apply custom class
  }, 
  {
    label: 'Digital Marketing',
    className: 'custom-button', // Apply custom class
  },
  {
    label: 'Web Services',
    className: 'custom-button', // Apply custom class
  },
];

function CustomButtons() {
  return (
    <div className="container">
      <div className="row">
        {buttonData.map((button, index) => (
          <div key={index} className="col-md-2 mb-4">
            <Button className={button.className}>
              {button.label}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomButtons;
