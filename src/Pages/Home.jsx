import './Home.css'
export const Home = () => {
  return (
    <div className="container">
      {/* Carrousel */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/src/assets/img/Banner_1.png"
              className="d-block w-100"
              alt="banner"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/src/assets/img/Banner_2.png"
              className="d-block w-100"
              alt="banner"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/img/Banner_3.png"
              className="d-block w-100"
              alt="banner"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Categorias */}
      <div className="row row-cols-2 row-cols-md-6 g-2">
        <div className="col">
          <div className="card mt-3">
            <img
              src="/src/assets/img/Categoria_kids.png"
              className="card-img"
              alt="Niños"
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h4 className="card-title text-light">Niños</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-3">
            <img
              src="/src/assets/img/Categoria_shoes.png"
              className="card-img"
              alt="Zapatos"
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h4 className="card-title text-light">Zapatos</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-3">
            <img
              src="/src/assets/img/Categoria_computers.png"
              className="card-img"
              alt="Computadoras"
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h4 className="card-title text-light">Computadoras</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-3">
            <img
              src="/src/assets/img/Categoria_clothing.png"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h3 className="card-title text-light">Ropa</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-3">
            <img
              src="/src/assets/img/Categoria_toys.png"
              className="card-img"
              alt="ropa"
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h4 className="card-title text-light">Juguetes</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-3">
            <img
              src="/src/assets/img/Categoria_music.png"
              className="card-img"
              alt="musica"
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h3 className="card-title text-light">Música</h3>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
