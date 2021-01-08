import React from "react";
import PortalIn from "portal/PortalIn";

const Teleportation = (props) => {
  return (
    <div>
      <p>Teleportation</p>
      <PortalIn portalType="headerPortal">
        <div>Loading...</div>
      </PortalIn>
    </div>
  );
};
export default Teleportation;
