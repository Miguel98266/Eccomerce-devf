import { getSingleUser } from "@/API/eccomerce";
import { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "@/Context/Auth.jsx";
import { Link } from "react-router-dom";
import "./MyAccount.css";
export const MyAccount = () => {
  const { user } = useContext(AuthContext); // Info Descifrada del Token del Usuario
  const effectRan = useRef(false); // Ya se ejecuto useEffect por segunda vez?
  const [userData, setUserData] = useState({}); // Guardamos la data del usuario que traemos de la API

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const fetchUserData = async () => {
        const result = await getSingleUser(user.id); // Llamo a la API y obtengo la info del usuario
        if (result.status === 200) {
          setUserData(result.data);
        }
      };

      fetchUserData();
    }

    return () => {
      effectRan.current = true;
    };
  }, [user]);

  return (
    <div className="container">
      <div className="row justify-content-md-center mt-5">
        <div className="col-sm-12 col-md-3">
          <Link to="/myaccount" className="link-myaccount  active">
            Mi Cuenta
          </Link>
          <Link to="/addproduct" className="link-myaccount ">
            Crear producto
          </Link>
        </div>
        <div className="col-sm-12 col-md-9">
          <h3 className="title">Mi Cuenta</h3>
          <h4>Información de {user?.role === "ADMIN" ? `Admin` : `Cliente`}</h4>
          {userData?.first_name && (
            <p className="first_name">Nombre: {userData.first_name}</p>
          )}
          {userData?.last_name && (
            <p className="last_name">Apellido: {userData.last_name}</p>
          )}
          {userData?.gender && (
            <p className="last_name">Genero: {userData.gender}</p>
          )}
          {userData?.email && <p className="Email"> Correo: {userData.email}</p>}
          <Link to="/updateuser" className="link-edit">
            Editar
          </Link>
        </div>
      </div>
      {/* {
        user?.role === 'ADMIN'
          ? <h2>Hola Admin</h2>
          : <h2>Hola Customer</h2>
      }

      {
        user?.role === 'CUSTOMER' && <h4>Bienvenido seas Cliente</h4>
      }

      {
        user?.role === 'ADMIN' && <h4>Bienvenido seas Admin</h4>
      }

      {userData?.first_name && <p className='first_name'>First Name: {userData.first_name}</p>}
      {userData?.last_name && <p className='last_name'>Last Name: {userData.last_name}</p>}
      {userData?.gender && <p className='Gender'>Gender: {userData.gender}</p>}
      {userData?.email && <p className='Email'>Email: {userData.email}</p>} */}
    </div>
  );
};
