import React, { useContext } from "react";
import { PortalContext } from './index';

export const PortalOut = (props) => {
    const { portalMap } = useContext(PortalContext);
    return portalMap.get(props.portalType) || null;
  };