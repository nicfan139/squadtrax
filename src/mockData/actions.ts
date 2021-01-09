import { faCalendarDay, faExchangeAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface IActionDTO {
  title: string;
  action: string;
  icon: any;
  description: string;
}

export const actionTypes = {
  REQUEST_GAME_RESCHEDULE: 'REQUEST_GAME_RESCHEDULE',
  REQUEST_GAME_SWAP: 'REQUEST_GAME_SWAP',
  MESSAGE_COORDINATOR: 'MESSAGE_COORDINATOR',
}

export const actionsList: IActionDTO[] = [
  {
    title: 'Request match reschedule',
    action: actionTypes.REQUEST_GAME_RESCHEDULE,
    icon: faCalendarDay,
    description: 'Velit do elit occaecat aliquip do nostrud officia ullamco quis sit pariatur ea cupidatat. Sint commodo aliquip dolore cillum aute. Labore eu anim proident excepteur tempor cillum et qui adipisicing proident. Ex excepteur nulla eu velit Lorem adipisicing consectetur quis dolore voluptate est veniam aute. Veniam excepteur do exercitation nostrud cillum laboris nisi magna est ullamco elit.'
  },
  {
    title: 'Request game swap',
    action: actionTypes.REQUEST_GAME_SWAP,
    icon: faExchangeAlt,
    description: 'Reprehenderit aliqua adipisicing quis commodo sint nulla. Eu ex culpa proident fugiat cillum est ea. Nisi culpa irure nulla incididunt. Duis consequat exercitation minim velit aute nostrud do sunt voluptate.'
  },
  {
    title: 'Message league coordinator',
    action: actionTypes.MESSAGE_COORDINATOR,
    icon: faEnvelope,
    description: 'Veniam nulla exercitation mollit consequat. Proident ea velit eiusmod ullamco. Aliquip tempor eiusmod nisi reprehenderit ad sunt tempor deserunt adipisicing quis laborum laborum id.'
  },
]