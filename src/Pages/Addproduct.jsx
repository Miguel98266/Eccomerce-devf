import { useNavigate } from 'react-router-dom'
import useForm from '@/hooks/useForm';
import { Createproduct } from '@/API/eccomerce';

export const Addproduct = () => {
     // Usamos el hook navigate para navegar hacia login
  const navigate = useNavigate()

  // Funcion que envia los datos
  const sendData = async (data) => {
    try {
      const result = await Createproduct(data);

      if(result.status === 201) {
        navigate('/products')
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message);
    }
  };

  // Estado inicial con el hook useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    isActive: true,
    product_name: '',
    description: '',
    price: 0,
    category: '',
    brand: '',
    sku:'',
    image:''
  });
  return (
    <div>
    <div className="text-center mt-5 ">
        <h2>CREAR PRODUCTO</h2>
      </div>
    <form className='container contariner-register'>
    <h4 className="title mt-4">Información del Producto</h4>
      <div className='mt-3 mb-3 input-register me-3'>
        <label htmlFor='product_name' className='form-label'>
          Nombre
        </label><span className="obligatorios"> *</span>
        <input
          type='text'
          name='product_name'
          onChange={handleInputChange}
          value={input.product_name}
          className='form-control'
          id='product_name'
          placeholder='tenis'
        />
      </div>
      <div className='mb-3 input-register '>
        <label htmlFor='description' className='form-label'>
            Descripción
        </label><span className="obligatorios"> *</span>
        <input
          type='text'
          name='description'
          onChange={handleInputChange}
          value={input.description}
          className='form-control'
          id='description'
          placeholder='Color rojo , hecho de piel , etc'
        />
      </div>
      <div className='mb-3 input-register me-3'>
        <label htmlFor='price' className='form-label'>
        Precio
        </label><span className="obligatorios"> *</span>
        <input
          type='number'
          className='form-control'
          id='price'
          name='price'
          onChange={handleInputChange}
          value={input.price}
        />
      </div>
      <div className='mb-3 input-register'>
        <label htmlFor='category' className='form-label'>
          Categoria
        </label><span className="obligatorios"> *</span>
        <select
          className='form-select'
          name='category'
          onChange={handleInputChange}
          value={input.category}>
          <option value='Seleccionar Categoria' disabled>
          Seleccionar Categoria
          </option>
          <option value='Books'>Libros</option>
          <option value='Movies'>Peliculas</option>
          <option value='Music'>Musica</option>
          <option value='Electronics'>Electronicos</option>
          <option value='Kids'>Niños</option>
          <option value='Shoes'>Tenis</option>
        </select>
      </div>
      <div className='mb-3 input-register me-3'>
        <label htmlFor='brand' className='form-label'>
            Marca
        </label><span className="obligatorios"> *</span>
        <input
          type='text'
          name='brand'
          onChange={handleInputChange}
          value={input.brand}
          className='form-control'
          id='brand'
          placeholder='Adidas,Nike,Hasbro'
        />
      </div>
      <div className='mb-3 input-register '>
        <label htmlFor='sku' className='form-label'>
          Sku 
        </label><span className="obligatorios"> *</span>
        <input
          type='text'
          className='form-control'
          id='sku'
          placeholder='e9cbfac1-301a-42c3-b94a-711a39dc7ed1'
          name='sku'
          onChange={handleInputChange}
          value={input.sku}
        />
      </div>
      <div className='mb-3 '>
        <label htmlFor='image' className='form-label'>
          Url imagen
        </label><span className="obligatorios"> *</span>
        <div>
          <input
            type='url'
            className='form-control'
            id='image'
            name='image'
            onChange={handleInputChange}
            value={input.image}
            placeholder="http:imagen.png"
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-8 offset-2'>
          <button type='button' className='link w-100' onClick={handleSubmit}>
            Crear producto
          </button>
        </div>
      </div>
    </form>
    </div>
  )
}


