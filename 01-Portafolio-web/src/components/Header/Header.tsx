import Nav from '@components/Nav/Nav.tsx';
import data from '@assets/data.json' with { type: 'json' };

function Header() {
  const information = data.Metadata;
  return (
    <header className="sticky flex h-(--header-height) w-9/10 flex-row items-center justify-between rounded-2xl border-1 border-x-white text-center text-2xl">
      {/* <h1 className="pl-4/100">{information.Title}</h1> */}

      <Nav/>
      {/* <nav className="flex max-w-7xl items-center justify-between">
        <a href="">
          <ul>Home</ul>
        </a>
        <a href="">
          <ul>Projects</ul>
        </a>
        <a href="">
          <ul>About</ul>
        </a>
        <a href="">
          <ul>Contact</ul>
        </a>
      </nav> */}
    </header>
  );
}

export default Header;
