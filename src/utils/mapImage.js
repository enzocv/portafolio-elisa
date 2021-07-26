import proyectos from '../images/proyectos.svg'
import marvol from '../images/marvol.svg'
import IphoneX from '../images/IphoneX.svg'

const images = {
  'proyect1': proyectos,
  'proyect2': marvol,
  'proyect3': IphoneX
}

export const mapImage = (img) => images[img]
