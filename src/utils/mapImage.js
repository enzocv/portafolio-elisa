import logo from '../images/logo.svg'
import proyectos from '../images/proyectos.svg'
import marvol from '../images/marvol.svg'
import IphoneX from '../images/IphoneX.svg'
import github from '../images/icon-github.svg'
import userCard1 from '../images/user-card1.png'
import userCard2 from '../images/user-card2.png'
import userCard3 from '../images/user-card3.png'
import iconPhone from '../images/icon-phone.svg'
import iconMail from '../images/icon_mail.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconHeard from '../images/icon-heart_outline.svg'

const images = {
  'logo': logo,
  'proyect1': proyectos,
  'proyect2': marvol,
  'proyect3': IphoneX,
  'github': github,
  'userCard1': userCard1,
  'userCard2': userCard2,
  'userCard3': userCard3,
  'iconPhone': iconPhone,
  'iconMail': iconMail,
  'iconInstagram': iconInstagram,
  'iconTwitter': iconTwitter,
  'iconHeard': iconHeard
}

export const mapImage = (img) => images[img]
