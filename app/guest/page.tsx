 const Guest = () => {
    return(
        <body data-email="user@example.com" data-password="12345678" data-url="https://api.ulems.my.id/" style={{overflowY:"hidden"}}>

    <nav className="navbar navbar-dark bg-dark navbar-expand fixed-bottom rounded-top-4 p-0" id="navbar-menus">
        <ul className="navbar-nav nav-justified w-100 align-items-center">
            <li className="nav-item">
                <a className="nav-link" href="#home">
                    <i className="fas fa-home"></i>
                    <span className="d-block" style={{fontSize: 0.7}}>Home</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#mempelai">
                    <i className="fa-solid fa-user-group"></i>
                    <span className="d-block" style={{fontSize: 0.7}}>Mempelai</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#tanggal">
                    <i className="fa-solid fa-calendar-check"></i>
                    <span className="d-block" style={{fontSize: 0.7}}>Tanggal</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#galeri">
                    <i className="fa-solid fa-images"></i>
                    <span className="d-block" style={{fontSize: 0.7}}>Galeri</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#ucapan">
                    <i className="fa-solid fa-comments"></i>
                    <span className="d-block" style={{fontSize: 0.7}}>Ucapan</span>
                </a>
            </li>
        </ul>
    </nav>

    <main className="text-light" data-bs-spy="scroll" data-bs-target="#navbar-menus" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" >

        <section className="container" id="home">

            <div className="text-center pt-4">
                <h1 className="font-esthetic my-4" >Undangan Pernikahan</h1>

                <div className="py-4">
                    <div className="img-crop border border-3 border-light shadow mx-auto">
                        <img src="./assets/images/bg.jpeg" alt="bg" />
                    </div>
                </div>

                <h1 className="font-esthetic my-4" >Selvi & Diwa</h1>
                <p className="mb-0" >Rabu, 17 April 2024</p>

                <a className="btn btn-outline-light btn-sm shadow rounded-pill px-3 my-2" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MnM1MjJrbzVxNG1hMTdvNDRiMDhrZTVxbmIgZGl3YWFuZHJlQG0&tmsrc=diwaandre%40gmail.com">
                    <i className="fa-solid fa-calendar-check me-2"></i>Save The Date
                </a>

                <div className="d-flex justify-content-center align-items-center mt-4 mb-2">
                    <div className="mouse-animation">
                        <div className="scroll-animation"></div>
                    </div>
                </div>

                <p className="m-0">Scroll Down</p>
            </div>
        </section>

        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#111111" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <section className="dark-section" id="mempelai">

            <div className="text-center">
                <h1 className="font-arabic py-4 px-2" >بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
                <h1 className="font-esthetic py-4 px-2" >Assalamualaikum Warahmatullahi Wabarakatuh</h1>

                <p className="pb-3 px-3">
                    Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat
                    sekalian untuk menghadiri acara pernikahan kami:
                </p>

                <div className="overflow-x-hidden">

                    <div data-aos="fade-left" data-aos-duration="2000">
                        <div className="img-crop border border-3 border-light shadow my-4 mx-auto">
                            <img src="./assets/images/cewe.png" alt="cewe" />
                        </div>
                        <h1 className="font-esthetic" >Eka Selvi Anggraeni</h1>
                        <p className="mt-3 mb-0" >Putri</p>
                        <p className="mb-0">Bapak Untung Sugiarto & Ibu Nuraeni</p>
                    </div>
                    
                    <h1 className="font-esthetic my-4" >&</h1>
                    
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <div className="img-crop border border-3 border-light shadow my-4 mx-auto">
                            <img src="./assets/images/cowo.png" alt="cowo" />
                        </div>
                        <h1 className="font-esthetic" >Andre Diwa Aji Pratama</h1>
                        <p className="mt-3 mb-0" >Putra</p>
                        <p className="mb-0">Bapak Bangun Wasono & Ibu Didik Nuryanti</p>
                    </div>
                </div>
            </div>
        </section>

        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#111111" fill-opacity="1" d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>

        <div className="container">
            <div className="text-center" data-aos="fade-up" data-aos-duration="2000">

                <h1 className="font-esthetic mt-0 mb-3" >
                    Allah Subhanahu Wa Ta'ala berfirman
                </h1>

                <p  className="px-2">
                    Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari
                    jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu
                    rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir.
                </p>

                <span className="mb-0"><strong>QS. Ar-Rum Ayat 21</strong></span>
            </div>
        </div>

        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#111111" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>

        <section className="dark-section" id="tanggal">

            <div className="container">
                <div className="text-center">

                    <h1 className="font-esthetic py-3" >Waktu Menuju Acara</h1>
                    <div className="border rounded-pill shadow py-2 px-4 mx-2 mb-4">

                        <div className="row justify-content-center" data-waktu="2024-04-17 00:00:00" id="tampilan-waktu">
                            <div className="col-3 p-1">
                                <h2 className="d-inline m-0 p-0" id="hari">0</h2><small className="ms-1 me-0 my-0 p-0 d-inline">Hari</small>
                            </div>
                            <div className="col-3 p-1">
                                <h2 className="d-inline m-0 p-0" id="jam">0</h2><small className="ms-1 me-0 my-0 p-0 d-inline">Jam</small>
                            </div>
                            <div className="col-3 p-1">
                                <h2 className="d-inline m-0 p-0" id="menit">0</h2><small className="ms-1 me-0 my-0 p-0 d-inline">Menit</small>
                            </div>
                            <div className="col-3 p-1">
                                <h2 className="d-inline m-0 p-0" id="detik">0</h2><small className="ms-1 me-0 my-0 p-0 d-inline">Detik</small>
                            </div>
                        </div>
                    </div>

                    <p style={{fontSize: 0.9}} className="mt-4 py-2">
                        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaAllah kami akan menyelenggarakan
                        acara :
                    </p>

                    <div className="overflow-x-hidden">
                        <div className="py-2" data-aos="fade-left" data-aos-duration="1500">
                            <h1 className="font-esthetic" style={{fontSize: 2}}>Akad</h1>
                            <p>Pukul 10.00 WIB - Selesai</p>
                        </div>

                        <div className="py-2" data-aos="fade-right" data-aos-duration="1500">
                            <h1 className="font-esthetic" style={{fontSize: 2}}>Resepsi</h1>
                            <p>Pukul 13.00 WIB - Selesai</p>
                        </div>
                    </div>

                    <div className="py-2" data-aos="fade-up" data-aos-duration="1500">
                        <a href="https://goo.gl/maps/emMJszRiX6uT2NKq5" target="_blank" className="btn btn-outline-light btn-sm rounded-pill shadow-sm mb-2 px-3">
                            <i className="fa-solid fa-map-location-dot me-2"></i>Lihat Google Maps
                        </a>
                        <p className="mb-0 mt-1 mx-1 pb-4" style={{fontSize: 0.9}}>
                            Dusun Beber Kejene, Rt. 54 Rw. 05 Randudongkal - Pemalang.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="dark-section" id="galeri">

            <div className="container pb-2 pt-4">
                <div className="card-body border rounded-4 shadow p-3">

                    <h1 className="font-esthetic text-center py-3" data-aos="fade-down" data-aos-duration="1500" style={{fontSize: 2}}>Galeri</h1>

                    <div id="carousel-foto-satu" data-aos="fade-up" data-aos-duration="1500" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-foto-satu" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-foto-satu" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-foto-satu" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner rounded-4">
                            <div className="carousel-item active">
                                <img src="https://picsum.photos/1280/720?random=1" alt="gambar 1" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/1280/720?random=2" alt="gambar 2" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/1280/720?random=3" alt="gambar 3" className="d-block w-100" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-foto-satu" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-foto-satu" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div id="carousel-foto-dua" data-aos="fade-up" data-aos-duration="1500" className="carousel slide mt-4" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-foto-dua" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-foto-dua" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-foto-dua" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner rounded-4">
                            <div className="carousel-item active">
                                <img src="https://picsum.photos/1280/720?random=4" alt="gambar 4" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/1280/720?random=5" alt="gambar 5" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/1280/720?random=6" alt="gambar 6" className="d-block w-100"  />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-foto-dua" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-foto-dua" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#111111" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>

        <div className="container">
            <div className="py-4">

                <div className="text-center">
                    <h1 className="font-esthetic mt-0 mb-3" >Love Gift</h1>

                    <p className="mb-1" style={{fontSize: 0.9}}>
                        Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk kami,
                        dapat melalui :
                    </p>

                    <div className="overflow-x-hidden">
                        <div className="row justify-content-center">

                            <div className="col-5 card-body border rounded-4 shadow p-3 m-3" data-aos="fade-down" data-aos-duration="1500">
                                <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/640px-BNI_logo.svg.png" className="img-fluid w-50 rounded" alt="bni" />

                                <p className="card-text mt-3 mb-0" style={{fontSize: 0.9}}>No. Rekening 123456789</p>
                                <p className="card-text" style={{fontSize: 0.9}}>a.n Lorem ipsum dolor</p>

                                <button className="btn btn-light btn-sm rounded-3" data-nomer="123456789" >Salin No. Rekening</button>
                            </div>

                            <div className="col-5 card-body border rounded-4 shadow p-3 m-3" data-aos="fade-down" data-aos-duration="1500">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/640px-BANK_BRI_logo.svg.png" className="img-fluid w-50 rounded" alt="bri" />

                                <p className="card-text mt-3 mb-0" style={{fontSize: 0.9}}>No. Rekening 123456789</p>
                                <p className="card-text" style={{fontSize: 0.9}}>a.n Lorem ipsum dolor</p>

                                <button className="btn btn-light btn-sm rounded-3" data-nomer="123456789" >Salin No. Rekening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="m-0 p-0" id="ucapan">
            <div className="container">

                <div className="card-body border rounded-4 shadow p-3">
                    <h1 className="font-esthetic text-center mb-3" >Ucapan & Doa</h1>
                    <div className="mb-1" id="balasan"></div>

                    <div className="mb-3">
                        <label htmlFor="form-nama" className="form-label">Nama</label>
                        <input type="text" className="form-control shadow-sm" id="form-nama" placeholder="Isikan Nama Anda" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="form-kehadiran" className="form-label" id="label-kehadiran">Kehadiran</label>
                        <select className="form-select shadow-sm" id="form-kehadiran">
                            <option value="0" selected>Konfirmasi Kehadiran</option>
                            <option value="1">Hadir</option>
                            <option value="2">Berhalangan</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="form-pesan" className="form-label">Ucapan & Doa</label>
                       
                        <textarea className="form-control shadow-sm" id="form-pesan"  placeholder="Tulis Ucapan & Doa"></textarea>
                    </div>

                    <div className="d-flex">
                       
                        <button className="flex-fill btn btn-primary btn-sm rounded-3 shadow m-1"  id="kirim">
                            Kirim<i className="fa-solid fa-paper-plane ms-1"></i>
                        </button>
                    </div>
                </div>

                <div className="rounded-4 mt-4 mb-2" id="daftar-ucapan"></div>

                <nav className="d-flex justify-content-center mb-0">
                    <ul className="pagination mb-0">
                        <li className="page-item disabled" id="previous">
                            <button className="page-link" aria-label="Sebelumnya">
                                <i className="fa-solid fa-circle-left me-1"></i>Sebelumnya
                            </button>
                        </li>
                        <li className="page-item disabled">
                            <span className="page-link text-light" id="page">1</span>
                        </li>
                        <li className="page-item" id="next">
                            <button className="page-link" aria-label="Selanjutnya">
                                Selanjutnya<i className="fa-solid fa-circle-right ms-1"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>

        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#111111" fill-opacity="1" d="M0,224L34.3,234.7C68.6,245,137,267,206,266.7C274.3,267,343,245,411,234.7C480,224,549,224,617,213.3C685.7,203,754,181,823,197.3C891.4,213,960,267,1029,266.7C1097.1,267,1166,213,1234,192C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
    </main>

    <footer>
        <div className="container">
            <div className="text-center">

                <p style={{fontSize: 0.7}} className="pt-2 pb-1 px-2" data-aos="fade-up" data-aos-duration="1500">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak / Ibu / Saudara / i.
                    berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih.
                </p>

                <h1 className="font-esthetic" data-aos="fade-up" data-aos-duration="2000">Wassalamualaikum Warahmatullahi Wabarakatuh</h1>
                <h1 className="font-arabic py-4 px-2" data-aos="fade-up" data-aos-duration="2000"style={{fontSize: 0.2}}>اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ</h1>

                <hr className="mt-3 mb-2"/>
            </div>
        </div>
    </footer>

    <div className="loading-page" id="welcome" >
        <div className="d-flex justify-content-center align-items-center" >

            <div className="text-center">
                <h1 className="font-esthetic mb-4" >The Wedding Of</h1>

                <div className="img-crop border border-3 border-red shadow mb-4 mx-auto">
                    <img src="./assets/images/bg.jpeg" alt="bg" />
                </div>

                <h1 className="font-esthetic my-4" >Selvi & Diwa</h1>
                <div id="nama-tamu"></div>

                <button type="button" className="btn btn-light shadow rounded-4 mt-4" >
                    <i className="fa-solid fa-envelope-open me-2"></i>Buka Undangan
                </button>
            </div>
        </div>
    </div>

    <button type="button" id="tombol-musik" className="btn btn-light btn-sm rounded-circle btn-music" data-status="true" data-url="./assets/music/sound.mp3">
        <i className="fa-solid fa-circle-pause spin-button"></i>
    </button>

    <div className="loading-page" id="loading" >
        <div className="d-flex justify-content-center align-items-center" >
            <div className="text-center w-75">
                <img className="img-fluid mb-3" src="./assets/images/icon-192x192.png" alt="icon" />
                <div className="progress" role="progressbar" >
                    <div className="progress-bar" id="bar" ></div>
                </div>
                <small className="mt-1 text-light" id="progress-info" >Loading asset</small>

                <script>
                    document.getElementById('progress-info').style.display = 'block';
                </script>
                <noscript>
                    <small className="mt-1 text-danger">Maaf, undangan ini perlu javascript</small>
                </noscript>
            </div>
        </div>
    </div>

    <div className="modal fade" id="modal-image"  aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
                <div className="modal-body p-0">
                    <div className="d-flex justify-content-center align-items-center" style={{height: 100}}>
                        <img src="./assets/images/bg.jpeg" className="w-100" alt="foto" id="show-modal-image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
</body>
    )
}

export default Guest