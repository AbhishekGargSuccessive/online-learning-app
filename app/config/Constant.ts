import {Icon} from './Icons';
import {Images} from './Images';

const registerOptions = [
  {
    id: 0,
    label: 'STUDENT',
  },
  {
    id: 1,
    label: 'TUTOR',
  },
];

const walkthrough = [
  {
    id: 0,
    title: 'Explore Online Courses',
    subTitle:
      'All types of educational & professional courses available online.',
    image: Images.WORK,
  },
  {
    id: 1,
    title: 'Go Take The Online Courses',
    subTitle:
      'All types of educational & professional courses available online.',
    image: Images.WORK,
  },
  {
    id: 2,
    title: "It's Your Online Courses",
    subTitle:
      'All types of educational & professional courses available online.',
    image: Images.WORK,
  },
];
const membership = [
  {
    id: 0,
    price: '$99',
    months: 'Month',
    subtitile: 'Get 7 Days free trial',
  },
  {
    id: 1,
    price: '$39',
    months: '3 Month',
    subtitile: '$13/month Billed quarterly',
  },
  {
    id: 2,
    price: '$68',
    months: '6 Month',
    subtitile: '$11.33/month Billed half-yearly',
  },
  {
    id: 3,
    price: '$115',
    months: 'Year',
    subtitile: "Pay once And don't worry for a year",
  },
];

const categories = [
  {
    id: 0,
    label: 'Mobile Design',
    icon: Icon.MOBILE,
  },
  {
    id: 1,
    label: '3D Modeling',
    icon: Icon.MODEL_3D,
  },
  {
    id: 2,
    label: 'Web Designing',
    icon: Icon.WEB_DESIGN,
  },
  {
    id: 3,
    label: 'Illustrations',
    icon: Icon.ILLUSTRATION,
  },
  {
    id: 4,
    label: 'Drawing',
    icon: Icon.DRAWING,
  },
  {
    id: 5,
    label: 'Animation',
    icon: Icon.ANIMATION,
  },
  {
    id: 6,
    label: 'Education',
    icon: Icon.EDUCATION,
  },
  {
    id: 7,
    label: 'Networking',
    icon: Icon.NETWORKING,
  },
  {
    id: 8,
    label: 'Coding',
    icon: Icon.CODING,
  },
];

const screens = {
  home: 'Home',
  search: 'Search',
  profile: 'Profile',
};

const bottomTabs = [
  {
    id: 0,
    label: screens.home,
    icon: Icon.HOME,
  },
  {
    id: 1,
    label: screens.search,
    icon: Icon.SEARCH,
  },
  {
    id: 2,
    label: screens.profile,
    icon: Icon.PROFILE,
  },
];

const classTypes = [
  {
    id: 0,
    label: 'All',
    icon: Icon.ALL,
  },
  {
    id: 1,
    label: 'Staff Pick',
    icon: Icon.STAFF_PICK,
  },
  {
    id: 2,
    label: 'Original',
    icon: Icon.ORIGINAL,
  },
];

const classLevels = [
  {
    id: 0,
    label: 'Beginner',
  },
  {
    id: 1,
    label: 'Intermediate',
  },
  {
    id: 2,
    label: 'Advanced',
  },
];

const createdWithin = [
  {
    id: 0,
    label: 'All Time',
  },
  {
    id: 1,
    label: 'This Month',
  },
  {
    id: 2,
    label: 'This Week',
  },
  {
    id: 3,
    label: 'This Day',
  },
  {
    id: 4,
    label: '2 Months',
  },
  {
    id: 5,
    label: '4 Months',
  },
];

const courseDetailsTabs = [
  {
    id: 0,
    label: 'Chapters',
  },
  {
    id: 1,
    label: 'Files',
  },
  {
    id: 2,
    label: 'Discussions',
  },
];

const videoUrl =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default {
  registerOptions,
  walkthrough,
  categories,
  screens,
  bottomTabs,
  classTypes,
  classLevels,
  createdWithin,
  courseDetailsTabs,
  membership,
  videoUrl,
};
