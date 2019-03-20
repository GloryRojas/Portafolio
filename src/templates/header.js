export const header = () => {
  const initHeader = document.createElement('div');
  const headerStat = `
  <header>
    <nav>
      <a href="#/home">HOME</a>
      <a href="#/projects">PROJECTS</a>
      <a href="#/aboutMe">ABOUT ME</a>
    </nav>
  </header>
  `;
  initHeader.innerHTML = headerStat;
  return initHeader;
};
