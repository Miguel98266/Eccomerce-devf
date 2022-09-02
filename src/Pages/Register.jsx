import useForm from '@/hooks/useForm';
import { RegisterUser } from '@/API/eccomerce';
import { useNavigate } from 'react-router-dom'
import './Register.css'

export function Register() {
  // Usamos el hook navigate para navegar hacia login
  const navigate = useNavigate()

  // Funcion que envia los datos
  const sendData = async (data) => {
    try {
      const result = await RegisterUser(data);

      if(result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message);
    }
  };

  // Estado inicial con el hook useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: 'Select a gender',
    email: '',
    password: '',
  });

  return (
    <div>
    <div className="text-center mt-5 ">
        <h2>CREAR UNA CUENTA</h2>
      </div>
    <form className='container contariner-register'>
    <h4 className="title mt-4">Información Personal</h4>
      <div className='mt-3 mb-3 input-register me-3'>
        <label htmlFor='name' className='form-label'>
          Nombre
        </label><span className="obligatorios"> *</span>
        <input
          type='text'
          name='first_name'
          onChange={handleInputChange}
          value={input.first_name}
          className='form-control'
          id='name'
          placeholder='Juanito'
        />
      </div>
      <div className='mb-3 input-register '>
        <label htmlFor='last-name' className='form-label'>
          Apellido
        </label><span className="obligatorios"> *</span>
        <input
          type='text'
          name='last_name'
          onChange={handleInputChange}
          value={input.last_name}
          className='form-control'
          id='last-name'
          placeholder='Perez'
        />
      </div>
      <div className='mb-3 input-register me-3'>
        <label htmlFor='birth' className='form-label'>
          Fecha de Nacimiento
        </label><span className="obligatorios"> *</span>
        <input
          type='date'
          className='form-control'
          id='birth'
          name='birth_date'
          onChange={handleInputChange}
          value={input.birth_date}
        />
      </div>
      <div className='mb-3 input-register'>
        <label htmlFor='gender' className='form-label'>
          Genero
        </label><span className="obligatorios"> *</span>
        <select
          className='form-select'
          name='gender'
          onChange={handleInputChange}
          value={input.gender}>
          <option value='Select a gender' disabled>
            Select a gender
          </option>
          <option value='M'>M</option>
          <option value='F'>F</option>
        </select>
      </div>
      <h4 className="title mt-4">Información de Ingreso</h4>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Email 
        </label><span className="obligatorios"> *</span>
        <input
          type='email'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='nombre@ejemplo.com'
          name='email'
          onChange={handleInputChange}
          value={input.email}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputPassword' className='form-label'>
          Contraseña
        </label><span className="obligatorios"> *</span>
        <div>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            name='password'
            onChange={handleInputChange}
            value={input.password}
            placeholder="*******"
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-8 offset-2'>
          <button type='button' className='link w-100' onClick={handleSubmit}>
            Crear una cuenta
          </button>
        </div>
      </div>
    </form>
    </div>
  );
}


