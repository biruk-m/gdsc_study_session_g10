const About = () => {
    return (
      <div>
        <h1>About</h1>
        <p>This is the About component.</p>
      
      
        <div>
          <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="search"
          />
          <div
            id="search-spinner"
            aria-hidden
            hidden={true}
          />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
          <button type="submit">New</button>
          </form>
        </div>
     <a href="/">Back to home</a>
    </div>
    );
  };
  
  export default About;