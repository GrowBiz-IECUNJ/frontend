import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  WalletIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserIcon,
  TruckIcon,
  
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
    path: '/UMKMs',
    name: 'UMKM',
    icon: UserIcon,
  },
  {
    path: '/Vendors',
    name: 'Vendor',
    icon: TruckIcon,
  },
  {
    path: '/Products',
    name: 'Products',
    icon: TruckIcon,
  },
]
