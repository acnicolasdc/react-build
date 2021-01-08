import { useContext, useEffect } from "react";
import { PortalContext } from './index';

const PortalIn = (props) => {
    const { addPortalItem, removePortalItem } = useContext(PortalContext);
  
    useEffect(() => {
      addPortalItem(props.portalType, props.children);
  
      return () => removePortalItem(props.portalType);
    }, [props.portalType, props.children]);
  
    return null;
  };

export default PortalIn;