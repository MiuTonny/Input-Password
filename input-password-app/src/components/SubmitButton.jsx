import React from 'react';


function SubmitButton() {
    function handleEnter() {
        console.log("Mouse Entering");
    }

    function handleLeave() {
        console.log("Mouse Exiting");
    }

    return (
        <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        >
            Submit Password
        </button>
    );
}

export default SubmitButton;