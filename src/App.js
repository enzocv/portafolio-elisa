import './styles/App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import Content from './components/Content';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Content />

      <Project image='proyect1' title='leonidasesteban.com' lore='Accede a más de 120 proyectos que te ayudarán a mejorar 
tus habilidades como desarrollador Front-End.' storyImg='userCard1' storyTitle='"Elisa ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses ".' storyCaptio='LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM' />

      <Project image='proyect2' title='MARVOL' lore='Es el sitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol.' storyImg='userCard2' storyTitle='"Elisa ha superado mis expectativas desde el diseño hasta el desarrollo".' storyCaptio='JASON LOPEZ / COFUNDADOR Y CEO MARVOL' />

      <Project image='proyect3' title='NETNET' lore='Películas y series ilimitadas y mucho más.
Disfruta donde quieras. Cancela cuando quieras.' storyImg='userCard3' storyTitle='"Por primera vez en la historia de nuestra empresa, aparecimos en todas las plataformas en las que trabajamos".' storyCaptio='MARCO CORTEZ / NETNET' />
    </div>
  );
}

export default App;
