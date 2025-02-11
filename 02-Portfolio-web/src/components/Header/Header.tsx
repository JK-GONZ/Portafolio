function Header() {
  return (
    <>
      <header
        style={{
          height: "75px",
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      >
        <h1
          style={{
            margin: "0",
            marginLeft: "30px",
            height: "75px",
            float: "left",
            alignContent: "center"
          }}
        >
          Prueba de header
        </h1>
        <nav
          style={{
            height: "100%",
            position: "relative",
            display: "flex",
            rowGap: "20px",
            alignContent: "center",
            alignItems: "center",
            placeContent: "flex-end",
            marginRight: "30px",
            fontSize: "20px",
            
          }}
        >
          <ul>Home</ul>
          <ul>Projects</ul>
          <ul>About</ul>
          <ul>Contact</ul>
        </nav>
      </header>
    </>
  );
}


export default Header;

