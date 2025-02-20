import data from '@assets/data.json' with { type: 'json' };
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext, IconType } from 'react-icons';

const information = data.data.About_me;

export function About() {
  return (
    <div className="flex h-full flex-col items-center lg:w-5xl">
      <p>{information.Name}</p>
      <p>{information.Education}</p>
      <p>{information.Profession}</p>
      <p>{information.Description}</p>

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
  );
}

function Icon({
  icon: IconComponent,
  color,
  url,
}: {
  icon: IconType;
  color: string;
  url: string;
}) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <IconContext.Provider value={{ size: '2em', style: { color } }}>
        <div>
          <IconComponent />
        </div>
      </IconContext.Provider>
    </a>
  );
}
