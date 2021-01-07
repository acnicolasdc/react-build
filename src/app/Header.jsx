import React from 'react';
import PortalOut from '../portal/PortalOut';

const Header = () => {
    return (
      <header>
        <PortalOut portalType="headerPortal" />
      </header>
    );
};

export default Header;