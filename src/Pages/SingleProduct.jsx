import { ReactComponent as Spinner } from "@/assets/Spinner.svg";
import { useProductContext } from "@/Context/ProductContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const { productId } = useParams();
  const context = useProductContext();

  const [productDetail] = context.products.filter((item) => item._id == productId)
  
 
  return (
    <div className="container d-flex flex-column gap-3 mt-5">
      {context.loading ? (
        <Spinner
          className="mx-auto"
          style={{ width: "200px", height: "200px" }}
        />
      ) : 
      
      (
        <Container>
          <Row>
            <Col>
              <img
                className="image-pdp"
                src={productDetail.image}
                alt={productDetail.product_name}
              />
            </Col>
            <Col className="my-auto ">
              <h1>{productDetail.product_name} </h1>
              <h5 className="model">MODEL: {productDetail.brand} </h5>
              <h6>Category: {productDetail.category} </h6>
              <div>
                <p className="price">$ {productDetail.price} </p>
              </div>
              <p className="description">
                {" "}
                {productDetail.description}
              </p>
              <div className="d-grid gap-2">
                {productDetail.isActive ? (
                  <Button className="link" size="lg">
                    Add to cart
                  </Button>
                ) : (
                  <Button variant="secondary" size="lg" disabled>
                    Out of stock
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      )
      
      }
    </div>
  );
};
