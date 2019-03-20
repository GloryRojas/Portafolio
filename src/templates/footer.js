export const footer = () => {
    const initFooter = document.createElement('div');
    const footerStat = `
    <footer>
      <nav>
        <a href="#/home">Contáctame</a>
        <a href="#/aboutMe">Redes</a>
      </nav>
    </footer>
    `;
    initFooter.innerHTML = footerStat;
    return initFooter;
  };
  