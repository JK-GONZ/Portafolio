import "@components/Header/Header.css";
import data from "@assets/data.json" with { type: "json" };

function Header() {
  const information = data.Metadata;
  return (
    <header>
      <h1>{information.Title}</h1>

      <nav>
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
      </nav>
    </header>
  );
}

export default Header;

