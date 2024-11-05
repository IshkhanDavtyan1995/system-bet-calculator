import React, { FunctionComponent } from "react";

interface WrapperProps {
    children:React.ReactNode
}
 
const Wrapper: FunctionComponent<WrapperProps> = ({children}) => {
    return ( 
        <div className="rounded-lg bg-[#181818]">
            {children}
        </div>
     );
}
 
export default Wrapper;