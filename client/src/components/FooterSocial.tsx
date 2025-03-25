import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const FooterSocial = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            setYear(new Date().getFullYear());
        }, 1000 * 60 * 60 * 24);

        return () => clearInterval(interval);
    }, [])

    return (

        <footer className="footer__social text-center">
        <div className="container px-4 px-lg-5">
            <ul className="list-inline mb-5">
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" target="_blank" rel="noopener" href="https://www.facebook.com/eric.espinozamansilla/" title="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" target="_blank" rel="noopener" href="https://www.linkedin.com/in/eric-espinoza-mansilla/" title="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white" target="_blank" rel="noopener" href="https://github.com/erc83/" title="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
            <p className="text__slate__gray small mb-0">
                <span>
                    Copyright &copy; Eric Espinoza 2021 - { year }
                </span>
            </p>
        </div>
    </footer>
    )
}
