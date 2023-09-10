import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  WalletIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/Find Investor',
    name: 'Find Investor',
    icon: WalletIcon,
  },
  {
    path: '/Forum',
    name: 'MSMES Forum',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    path: '/GrowBiz Empowered',
    name: 'GrowBiz Empowered',
    icon: AcademicCapIcon,
  },
]
