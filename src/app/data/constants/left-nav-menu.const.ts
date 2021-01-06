import {IleftNavMenu} from '@data/interfaces';
import { faBookmark, faChartLine, faCog, faHeart, faUser, faClipboard, faComment, faCogs } from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';


export const LEFT_NAV_MENUS: IleftNavMenu[] = [
  {
    title: 'Mi cuenta',
    links: [
      {
        icon: faUser,
        name: 'Perfil'
      },
      {
        icon: faCog,
        name: 'Mi cuenta'
      },
      {
        icon: faClipboard,
        name: 'Historial'
      },
      {
        icon: faComment,
        name: 'Comentarios'
      }
    ]
  },
  {
    title: 'Servicios',
    links: [
      {
        icon: faYoutube,
        name: 'Videos'
      },
      {
        icon: faHeart,
        name: 'Favoritos'
      },
      {
        icon: faBookmark,
        name: 'Articulos'
      },
      {
        icon: faChartLine,
        name: 'Estadistica'
      },
      {
        icon: faCogs,
        name: 'Settings'
      }
    ]
  },
]
