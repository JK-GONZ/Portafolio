import data from '@assets/data.json' with { type: 'json' };
import Icon from '@components/Icon.tsx';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const information = data.data.About_me;

const Footer = () => (
  <footer className="relative flex border-t bg-(--card) py-6 text-center text-(--accent-hover)">
    <div className="flex-1">
      Jorge E. González Gonzalo <br /> &copy; {new Date().getFullYear()} -
      Copyright reserved
    </div>
    <div className="hidden md:absolute md:inset-0 md:flex md:justify-end md:gap-3 md:rounded-2xl md:py-7 md:pr-6 md:text-xl md:font-semibold md:shadow-md md:transition md:hover:shadow-lg">
      <Icon
        icon={FaLinkedin}
        color="var(--secundary-color)"
        url={information.Social.Linkedin}
      />

      <Icon
        icon={FaGithub}
        color="var(--secundary-color)"
        url={information.Social.GitHub}
      />
    </div>
  </footer>
);

export default Footer;
