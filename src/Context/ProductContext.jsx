import { createContext, useState, useEffect, useContext } from "react";
import { ecomerceApi } from "@/API/eccomerce";

const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([]); //Data de la API
  const [categorias, setCategorias] = useState([]); //Categoria del producto
  const [selectedProduct, setSelectedProduct] = useState({}); // Producto seleccionado
  const [loading, setLoading] = useState(true); // Nos va a indicar cuando los datos estan disponibles
  const [search, setSearch] = useState("");

  const getProductsData = async () => {
    try {
      setLoading(true);
      const res = await ecomerceApi.get(`/item`);
      setProducts(res.data);
      const categoriasaux = new Set();
      for (const resultados of res.data) {
        categoriasaux.add(resultados.category);
        // console.log(statusFilter) 
      }
      setCategorias(categoriasaux);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  useEffect(() => {
    getProductsData();
   
  }, []);
  const value = {
    products,
    selectedProduct,
    setSelectedProduct,
    loading,
    search,
    setSearch,
    categorias,

  };
  return (
    <ProductContext.Provider value={value} {...props}></ProductContext.Provider>
  );
}
// Paso 3: Consumidor del contexto
// Brindar acceso a la data global de mi contexto
const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};
// Paso 4: Exportar las funciones del Provider y el Consumer
export { ProductProvider, useProductContext };
