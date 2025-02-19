import { Nav } from '@components/Nav/Nav.tsx';
// import data from '@assets/data.json' with { type: 'json' };

export function Header() {
  // const information = data.Metadata;
  return (
    <header className="sticky flex w-9/10 flex-row items-center justify-between rounded-2xl border-1 border-x-white text-center text-2xl">
      <Nav />
    </header>
  );
}
