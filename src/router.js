const cambiarTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return vistaTmp('#/home');
    } else if (hash === '#/home' || hash === '#/projects'|| hash === '#/aboutMe') {
      return vistaTmp(hash);
    } else {
      return vistaTmp('#/home');
    }
  }
  
  const vistaTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('root');
    root.innerHTML = '';
    switch (router) {
      case 'home':
        root.appendChild();
        root.appendChild();
        break;
      case 'projects':
        root.appendChild();
        break;
      case 'aboutMe':
        root.appendChild();
        root.appendChild();
        break;
      default:
        root.appendChild();
        break;
    }
  }
  
  export const initRouter = () => {
    window.addEventListener('load', cambiarTmp(window.location.hash))
    if (('onhashchange' in window)) window.onhashchange = () => cambiarTmp(window.location.hash)
  }
  