import { useContext } from "react";
import useForm from "@/Hooks/useForm";
import { LoginUser } from "@/API/eccomerce";
import { AuthContext } from "@/Context/Auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Login.css'
export const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const sendData = async (data) => {
    try {
      const result = await LoginUser(data);
      if (result.status === 200) {
        loginUser(result.data.token);
        navigate("/myaccount");
      }
    } catch (error) {
      alert("Ocurrió un error: " + error.message);
    }
  };
  // Estado inicial con el hook useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: "",
    password: "",
  });
  return (
    <div className="container">
      <div className="text-center mt-5 ">
        <h2 >ACCESO A CLIENTES</h2>
      </div>
      <div className="row mt-5 ">
        <div className="col mx-5">
          <h3 className="title">Clientes Registrados</h3>
          <p>Si tienes una cuenta, ingresa con tu dirección de email.</p>
          <form className="container">
            <div className="mt-5 mb-3">
              <label htmlFor="inputemail" className="form-label">
                Email
              </label><span className="obligatorios"> *</span>
              <input
                type="email"
                className="form-control"
                id="inputemail"
                placeholder="name@example.com"
                name="email"
                value={input.email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="inputPassword" className="form-label">
                Contraseña
              </label><span className="obligatorios"> *</span>
              <div className="col-sm-12">
                <input
                  type="password"
                  className="form-control"
                  value={input.password}
                  id="inputPassword"
                  name="password"
                  placeholder="*******"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <p className="obligatorios">*Campos Obligatorios</p>
            <div className="row">
              <div className="col-8 offset-2">
                <button
                  type="button"
                  className="link "
                  onClick={handleSubmit}
                >
                  Ingresar
                </button>
              </div>
            </div>
            
          </form>
        </div>
        <div className="col me-5 nuevos-clientes">
          <h3 className="title">Nuevos Clientes</h3>
          <p className="justify">
            Crear una cuenta tiene varios beneficios: guarda tus productos
            favoritos para tenerlos a la mano, realiza reseñas sobre los
            productos, recibe contenido personalizado de nuestro boletín de
            noticias.
          </p>
          <Link to="/register" className="link">Crear Cuenta</Link>
        </div>
      </div>
    </div>
  );
};
