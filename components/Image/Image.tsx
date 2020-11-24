import React from "react";
import { IMG_FALLBACK_URL } from "../../utils/constants";
import ReactImageFallback from "react-image-fallback";

type Props = {
    source : string
    alternate? : string
    className : string
}

const Image:React.FunctionComponent<Props> = ({source, alternate, className}) => {
    return(
        <ReactImageFallback 
            src={source}
            fallbackImage={IMG_FALLBACK_URL}
            initialImage={IMG_FALLBACK_URL}
            alt={alternate} 
            className={className}/>
    )
}

export default Image;