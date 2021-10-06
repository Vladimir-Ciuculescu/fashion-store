import React from 'react';
import './homepage.styles.css';

import Directory from '../../components/directory/directory.component';

const HomePage = ({ history }) => {
    
return (
    <div className="homepage">
        <Directory></Directory>
    </div>
);

   
};

export default HomePage;