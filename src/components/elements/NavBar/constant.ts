import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  WalletIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserIcon,
  TruckIcon,
  IdentificationIcon
  
} from '@heroicons/react/24/outline'

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/Investor',
    name: 'Find Investor',
    icon: WalletIcon,
  },
  {
    path: '/Forum',
    name: 'MSMES Forum',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    path: '/Courses',
    name: 'Courses',
    icon: AcademicCapIcon,
  },
  {
    path: '/Workshops',
    name: 'Workshops',
    icon: GlobeAltIcon,
  },
  {
    path: '/UMKM',
    name: 'UMKM',
    icon: UserIcon,
  },
  {
    path: '/Wallet',
    name: 'Wallet',
    icon: TruckIcon,
  },
  {
    path: '/Products',
    name: 'Products',
    icon: TruckIcon,
  },
  {
    path: '/Vendor',
    name: 'Vendor',
    icon: IdentificationIcon,
  },
]
