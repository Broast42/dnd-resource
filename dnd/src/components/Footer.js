import React from 'react';

const Footer = () => {
    return(
        <footer>
            <h3>
                This app was created by <a href="http://www.rjarrettdowd.com"> R Jarrett Dowd</a>    
            </h3>
            <h3>
                And made possable by <a href="http://www.dnd5eapi.co/">D&D 5e API
                </a>
            </h3>
            <p>All information found on this site is provided through <a href="http://www.dnd5eapi.co/">D&D 5e API</a> Any inaccuracies or corrections pertaining to data should be directed <a href="https://github.com/bagelbits/5e-srd-api"> here</a></p>
            <p>Any other issues such as bugs, mis-calculations, or general UI problems please email me at: <address> rjarrettdowd@yahoo.com</address> 
            </p>
        </footer>
    );
};

export default Footer;