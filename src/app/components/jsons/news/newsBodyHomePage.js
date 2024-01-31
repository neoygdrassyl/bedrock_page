import './newsBodyHomePage.css';
    import { Link } from "react-router-dom";
export function News_Home_Structure({ title, date, summary, image, url,imageTranscript }) {

    const icon_folder = <i class="fas fa-folder " style={{ color: '#107ABC' }}></i>;
    const icon_date = <i class="fas fa-clock " style={{ color: '#107ABC' }}></i>;

    return (
        <Link to={url} class="text-decoration-none text-default ">
            <div className="news-card">
                <aside className="news-card-image-section">
                    <img src={image} className="news-card-image" alt={imageTranscript} />
                </aside>
                <div className="news-card-info">
                    <h3 className="news-card__title"> {icon_folder} {title}
                    </h3>
                    <div className="news-card__content">{summary}</div>
                    <div className="news-card__date">
                        {icon_date} {date}
                    </div>
                    <div className="news-card__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                    </div>
                </div>
            </div >
        </Link>



        // <div class="col-3 align-items-center">
        //     <div class="card align-items-center">
        //         <img src={value.image} class="card-img-top" alt="Noticias y avisos importantes de la curaduria." style={{ height: '160px' }} />
        //         <div class="card-body">
        //             <label className="text-start fw-normal" style={{ color: 'gray' }}>{value.icon_folder} {value.category}</label>
        //             <h5 class="card-title fw-normal "><b>{value.title}</b></h5>
        //             <Link to={value.url} class="text-dark"><p class="card-text fw-normal">{value.summary} <p className='text-info'> {value.link}</p></p></Link>
        //             <label className="px-1" style={{ color: 'gray' }}>{value.icon_date} {value.date}</label>
        //         </div>
        //     </div>
        // </div>
    )
}


