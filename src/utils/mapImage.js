import proyectos from '../images/proyectos.svg'
import marvol from '../images/marvol.svg'
import IphoneX from '../images/IphoneX.svg'
import github from '../images/icon-github.svg'
import userCard1 from '../images/user-card1.png'
import userCard2 from '../images/user-card2.png'
import userCard3 from '../images/user-card3.png'

const images = {
  'proyect1': proyectos,
  'proyect2': marvol,
  'proyect3': IphoneX,
  'github': github,
  'userCard1': userCard1,
  'userCard2': userCard2,
  'userCard3': userCard3
}

export const mapImage = (img) => images[img]
