import React, { useState } from 'react';

const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleConfirm = () => {
    // Handle confirmation logic
    console.log('Confirmed');
    setShowPopup(false);
  };

  const handleCancel = () => {
    // Handle cancellation logic
    console.log('Cancelled');
    setShowPopup(false);
  };

  return (
    <div>
      {/* <button onClick={() => setShowPopup(true)}>Show Confirmation Popup</button> */}
      {showPopup && (
        <ConfirmationPopup
          message="Are you sure you want to proceed?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;
