import { faHome, faUserFriends, faCalendar, faLocationArrow, faList } from '@fortawesome/free-solid-svg-icons'

interface IRouteDTO {
  label: string;
  route: string;
  icon: any;
}

export const routes:IRouteDTO[] = [
  {
    label: 'Overview',
    route: '/',
    icon: faHome,
  },
  {
    label: 'Teams',
    route: '/teams',
    icon: faUserFriends,
  },
  {
    label: 'Fixtures',
    route: '/fixtures',
    icon: faCalendar,
  },
  {
    label: 'Actions',
    route: '/actions',
    icon: faLocationArrow,
  },
  {
    label: 'Rules',
    route: '/rules',
    icon: faList,
  },
]