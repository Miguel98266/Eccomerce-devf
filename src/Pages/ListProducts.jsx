import CardProduct from "@/Components/CardProduct";
import { ReactComponent as Spinner } from "@/assets/Spinner.svg";
import { useProductContext } from "@/Context/ProductContext";

export const ListProducts = () => {
  const context = useProductContext();
  
  const filterproducts = context.products.filter((producto) => {
    if (context.search === "") {
      return producto;
    } else if (
      producto.product_name.toLowerCase().includes(context.search.toLowerCase())
    ) {
      return producto;
    }
    return null;
  });

  return (
    <>
    <div className="container d-flex flex-wrap gap-3 mt-5 justify-content-center">
      {context.loading ? (
        <Spinner
          className="mx-auto"
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "white",
          }}
        />
      ) : (
        filterproducts.map((producto) => (
          <>
            <CardProduct producto={producto}></CardProduct>
          </>
        ))
      )}
    </div>
  </>
  )
}


