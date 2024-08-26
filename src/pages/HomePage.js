import React from 'react'; // Import React library
import Header from '../components/Header'; // Import the Header component
import Templates from '../Templates/Templates'; // Import the Templates component

const HomePage = () => {
    return (
        <>
            {/* Render the Header component at the top of the page */}
            <Header />
            {/* Render the Templates component below the Header */}
            <Templates />
        </>
    );
};

export default HomePage; // Export the HomePage component for use in other parts of the application
