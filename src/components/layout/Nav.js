import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
            <ul className="holder">
                <li><NavLink to="/" className={ ( { isActive } ) => isActive ? "activo" : undefined }>HOME</NavLink></li>
                <li><NavLink to="/cosmologia" className={ ( { isActive } ) => isActive ? "activo" : undefined }>COSMOLOGÍA</NavLink></li>
                <li><NavLink to="/diosesyheroes" className={ ( { isActive } ) => isActive ? "activo" : undefined }>DIOSES Y HÉROES</NavLink></li>
                <li><NavLink to="/culturapopular" className={ ( { isActive } ) => isActive ? "activo" : undefined }>CULTURA POPULAR</NavLink></li>
                <li><NavLink to="/novedades" className={ ( { isActive } ) => isActive ? "activo" : undefined }>NOVEDADES</NavLink></li>
                <li><NavLink to="/contacto" className={ ( { isActive } ) => isActive ? "activo" : undefined }>CONTACTO</NavLink></li>
            </ul>
            </div>
        </nav>
    );
}

export default Nav;