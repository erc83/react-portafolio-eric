
import { portfolioData } from '../data/portafolioData';

export const Portafolio = () => {
    return (
        <section className="content-section" id="portafolio">
            <div className="container px-4 px-lg-5">
                <div className="content-section-heading text-center">
                    <h3 className="text__sunflower__yellow mb-0">Portafolio</h3>
                    <h2 className="mb-5">Proyectos Destacados</h2>
                </div>
                <div className="row gx-0">
                    {portfolioData.map((project, index) => (
                        <div key={index} className="col-lg-6">
                            <a className="portfolio-item" href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2">{project.title}</div>
                                        <p className="mb-0">{project.description}</p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={project.imageSrc}  alt="img_cloudinary_portafolio" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

