

const Carousel = () => {
    return(
        <section className="dark-section" id="galeri">
        <div className="container pb-2 pt-4">
          <div className="card-body border rounded-4 shadow p-3">
            <h1
              className="font-esthetic text-center py-3"
              data-aos="fade-down"
              data-aos-duration="1500"
              style={{ fontSize: 2 }}
            >
              Galeri
            </h1>

            <div
              id="carousel-foto-satu"
              data-aos="fade-up"
              data-aos-duration="1500"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carousel-foto-satu"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel-foto-satu"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel-foto-satu"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner rounded-4">
                <div className="carousel-item active">
                  <img
                    src="https://picsum.photos/1280/720?random=1"
                    alt="gambar 1"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/1280/720?random=2"
                    alt="gambar 2"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/1280/720?random=3"
                    alt="gambar 3"
                    className="d-block w-100"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel-foto-satu"
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
                data-bs-target="#carousel-foto-satu"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div
              id="carousel-foto-dua"
              data-aos="fade-up"
              data-aos-duration="1500"
              className="carousel slide mt-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carousel-foto-dua"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel-foto-dua"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel-foto-dua"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner rounded-4">
                <div className="carousel-item active">
                  <img
                    src="https://picsum.photos/1280/720?random=4"
                    alt="gambar 4"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/1280/720?random=5"
                    alt="gambar 5"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/1280/720?random=6"
                    alt="gambar 6"
                    className="d-block w-100"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel-foto-dua"
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
                data-bs-target="#carousel-foto-dua"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Carousel