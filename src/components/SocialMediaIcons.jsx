import linkInIcon from "../assets/linkedin.png";
import fbIcon from "../assets/facebook.png";
import twitIcon from "../assets/twitter.png";
import insIcon from "../assets/instagram.png";

const SocialMediaIcons = () => {
    return (
        <div className='flex justify-center md:justify-start my-10 gap-7'>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com"
                target='_blank'
                rel='noreferrer'
            >
                <img src={linkInIcon} alt="linkedin-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.twitter.com"
                target='_blank'
                rel='noreferrer'
            >
                <img src={twitIcon} alt="twitter-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target='_blank'
                rel='noreferrer'
            >
                <img src={insIcon} alt="instagram-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com"
                target='_blank'
                rel='noreferrer'
            >
                <img src={fbIcon} alt="facebook-link" />
            </a>
        </div>
    )
}

export default SocialMediaIcons