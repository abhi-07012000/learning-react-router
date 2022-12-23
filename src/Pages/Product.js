import { NavLink,Outlet } from "react-router-dom";

const Product=()=>{

    const navLinkStyle = ({isActive}) =>{
        return{
          fontWeight :  isActive ? 'bold' : 'normal' ,
          textDecoration :isActive ? 'none' : 'underline' 
        }
      }

    return(<>
        <div>
            <input type="search" placeholder="Search Product"/>
        </div>
        <nav>
            <NavLink style={navLinkStyle} to='featured'>Featured</NavLink>
            <NavLink style={navLinkStyle} to='new'>New</NavLink>
        </nav>
        <Outlet />
        </>
    );
}

export default Product;
