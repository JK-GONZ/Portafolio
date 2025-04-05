import { IconContext, IconType } from 'react-icons';

export default function Icon({
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
