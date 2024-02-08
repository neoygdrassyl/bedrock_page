import IMG1 from '../img/slider/img1.jpg'
import IMG2 from '../img/slider/img2.jpg'
import IMG3 from '../img/slider/img3.jpg'
import COLOMBIA from '../img/img6.jpg'

const ImageCarousel = () => {
    return (
        <>
            <div className='col-lg-9 px-0 ' style={{ height: '320px' }}>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{ height: '320px' }}>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3500" style={{ height: '310px' }}>
                            <img src={COLOMBIA} class="d-block w-100" alt="Bucaramanga santander y sus hermosos paisajes." style={{ height: '310px' }} />
                            <div class="carousel-caption d-none d-md-block" style={{ height: '25px' }}>
                                <p className='text-light  text-end px-2 fw-bold' style={{ width: '800px' }}>Creditos: Daniel Beltran</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3500" style={{ height: '310px' }}>
                            <img src={IMG1} class="d-block w-100" alt="Bucaramanga santander y sus hermosos paisajes." style={{ height: '310px' }} />
                            <div class="carousel-caption d-none d-md-block" style={{ height: '25px' }}>
                                <p className='text-light text-end px-2 fw-bold' style={{ width: '800px' }}>Creditos: David Alberto Arias</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3500" style={{ height: '310px' }}>
                            <img src={IMG2} class="d-block w-100" alt="Bucaramanga santander la ciudad de los parques." style={{ height: '310px' }} />
                            <div class="carousel-caption d-none d-md-block" style={{ height: '25px' }}>
                                <p className='text-light text-end px-2 fw-bold' style={{ width: '800px' }}>Creditos: David Alberto Arias</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3500" style={{ height: '310px' }}>
                            <img src={IMG3} class="d-block w-100" alt="Bucaramanga santander la ciudad bonita." style={{ height: '310px' }} />
                            <div class="carousel-caption d-none d-md-block" style={{ height: '25px' }}>
                                <p className='text-light text-end px-2 fw-bold' style={{ width: '800px' }}>Creditos: David Alberto Arias</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>

    );
};

export default ImageCarousel;
