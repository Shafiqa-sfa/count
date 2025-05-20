import { Link } from "react-router-dom";
import Login from "./Login";
import image from "./assets/image.jpg"

const Pagenotfound =() =>{
    return(
        <div>
            <h1>This page is not found error 404</h1>
            
            <Link to="/Login">Login</Link>
            <img className="w-full" src={image} />
            
        </div>
    )
}
export default Pagenotfound