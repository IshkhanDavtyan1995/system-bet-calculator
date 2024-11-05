import { FunctionComponent } from "react";

interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return ( 
        <div>
            <h1 className="text-[#409a1a]">System bet calculator</h1>
        </div>
     );
}
 
export default Header;