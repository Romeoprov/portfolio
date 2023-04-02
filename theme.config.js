const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Roméo Provenzano - Portfolio BTS SIO.
        <a href="https://www.linkedin.com/in/rom%C3%A9o-provenzano/">LinkedIn 📢</a>
        <br/>
        <a href="https://github.com/Romeoprov">GitHub 💻</a>
        <br/>
        <a href="http://provenzano.romeopro@gmail.com">Mail ✏️</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
