


const GiftAccountNumber = () => {
    return(
        <section className="container">
        <div className="py-4">
          <div className="text-center">
            <h1 className="font-sacramento my-4 text-4xl md:text-8xl py-3">Love Gift</h1>

            <p className="mb-1" style={{ fontSize: 0.9 }}>
              Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan
              tanda kasih untuk kami, dapat melalui :
            </p>

            <div className="overflow-x-hidden">
              <div className="flex">
                <div
                  className="col-5 card-body border rounded-4 shadow p-3 m-3"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/640px-BNI_logo.svg.png"
                    className="img-fluid w-50 rounded"
                    alt="bni"
                  />

                  <p
                    className="card-text mt-3 mb-0"
                    style={{ fontSize: 0.9 }}
                  >
                    No. Rekening 123456789
                  </p>
                  <p className="card-text" style={{ fontSize: 0.9 }}>
                    a.n Lorem ipsum dolor
                  </p>

                  <button
                    className="btn btn-light btn-sm rounded-3"
                    data-nomer="123456789"
                  >
                    Salin No. Rekening
                  </button>
                </div>

                <div
                  className="col-5 card-body border rounded-4 shadow p-3 m-3"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/640px-BANK_BRI_logo.svg.png"
                    className="img-fluid w-50 rounded"
                    alt="bri"
                  />

                  <p
                    className="card-text mt-3 mb-0"
                    style={{ fontSize: 0.9 }}
                  >
                    No. Rekening 123456789
                  </p>
                  <p className="card-text" style={{ fontSize: 0.9 }}>
                    a.n Lorem ipsum dolor
                  </p>

                  <button
                    className="btn btn-light btn-sm rounded-3"
                    data-nomer="123456789"
                  >
                    Salin No. Rekening
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default GiftAccountNumber