import "./Heade.css";
import { useProductContext } from "@/Context/ProductContext";
import { Link } from "react-router-dom";
import { useContext, useRef, useState, useEffect } from 'react';
import logo from "@/assets/logo2.svg";
import { AuthContext } from "@/Context/Auth";
import { getSingleUser } from "@/API/eccomerce";

const Header = () => {
  const context = useProductContext();
  const { isAuth, logout,user } = useContext(AuthContext);
  const [userData, setUserData] = useState({})
  const effectRan = useRef(false)
  const handleSearch = (e) => {
    context.setSearch(e.target.value);
  };
  
  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const fetchUserData = async () => {
        const result = await getSingleUser(user.id) // Llamo a la API y obtengo la info del usuario
        if (result.status === 200) {
          setUserData(result.data)
        }
      }

      fetchUserData()
    }

    return () => {
      effectRan.current = true
    }
  }, [isAuth])
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-light header__nav">
        <div className="container">
          <Link to="/">
            <img className="header__logo" src={logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            
            <form className="d-flex m-auto" role="search">
              <input
                className="form-control"
                type="search"
                onChange={handleSearch}
                placeholder="Buscar"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="header__item-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="header__item-link">
                  Productos
                </Link>
              </li>
              {isAuth ? (<>
          <li className='header__list-item'>
            <Link
              to='/myaccount'
              className='header__item-link'>
              {`Bienvenido ${userData.first_name}`}
            </Link>
          </li>
          <li className='header__list-item'>
            <Link
              to='/'
              className='header__item-link'
              onClick={logout}>
              Salir
            </Link>
          </li>   
          </>   
        ) : (
          <><li className="nav-item">
                <Link to="/login" className="header__item-link">
                  Ingresar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="header__item-link">
                  Crear Cuenta
                </Link>
              </li></>
        )}
              
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Header;
