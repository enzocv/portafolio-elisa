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
tus habilidades como desarrollador Front-End.'  />
    </div>
  );
}

export default App;
