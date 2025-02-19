import { Nav } from '@components/Nav/Nav.tsx';

export function Home() {
  return (
    <div className="flex h-full flex-col items-center lg:w-5xl">
      <Nav />
      <h1>Home</h1>
    </div>
  );
}
