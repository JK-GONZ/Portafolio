import data from '@assets/data.json' with { type: 'json' };
import { Nav } from '@components/Nav/Nav.tsx';
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export function About() {
  const information = data.data.About_me;
  return (
    <div className="flex h-full flex-col items-center lg:w-5xl">
      <Nav />
      <h1>About</h1>
      <p>{information.Name}</p>
      <p>{information.Education}</p>
      <p>{information.Profession}</p>
      <p>{information.Description}</p>
      <a href={information.Social.Linkedin}>
        <IconContext.Provider
          value={{ size: '2em', style: { color: 'var(--secundary-color)' } }}
        >
          <div>
            <FaLinkedin />
          </div>
        </IconContext.Provider>
      </a>
    </div>
  );
}
