import { Link } from "react-router-dom";

const Nav = () => {
    return ( 

        <>
            <nav>
                {/* Hier werden die Straßenschilder festgestellt */}
                <Link to="/"><button>Restaurant</button>  </Link>
                <Link to="/contact"><button>Kontakt</button></Link>
                <Link to="/about"><button>Öffnungszeiten</button></Link>
                <Link to="/gallery"><button>Gallerie</button></Link>
            </nav>
        </>
     );
}
 
export default Nav;