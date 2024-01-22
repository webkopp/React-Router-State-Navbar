import { Link } from "react-router-dom";

const Nav = () => {
    return ( 

        <>
            <nav>
                {/* Hier werden die Straßenschilder festgestellt */}
                <Link to="/"><button>Home</button>  </Link>
                <Link to="/about"><button>About</button></Link>
                <Link to="/contact"><button>Contact</button></Link>
                <Link to="/gallery"><button>Gallery</button></Link>
            </nav>
        </>
     );
}
 
export default Nav;