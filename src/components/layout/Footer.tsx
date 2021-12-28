const Footer = () => (
  <footer className="flex justify-between items-center">
    <h2>
      {new Date().getFullYear()} -{" "}
      <a
        href="https://github.com/legitbeep"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        legitbeep
      </a>
    </h2>
  </footer>
);

export default Footer;
