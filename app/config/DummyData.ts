import {Icon} from './Icons';
import {Images} from './Images';

const categories = [
  {
    id: 0,
    title: 'Mobile Design',
    thumbnail: Images.BG_1,
    icon: Icon.MOBILE,
  },
  {
    id: 1,
    title: '3D Modeling',
    thumbnail: Images.BG_2,
    icon: Icon.MODEL_3D,
  },
  {
    id: 2,
    title: 'Web Designing',
    thumbnail: Images.BG_3,
    icon: Icon.WEB_DESIGN,
  },
  {
    id: 3,
    title: 'Illustrations',
    thumbnail: Images.BG_4,
    icon: Icon.ILLUSTRATION,
  },
];

const coursesList1 = [
  {
    id: 0,
    title: 'Canava Graphic Design Course - Beginner',
    duration: '2h 30m',
    thumbnail: Images.THUMBNAIL_1,
  },
  {
    id: 1,
    title: 'The Complete Presentation and speech',
    duration: '1h 30m',
    thumbnail: Images.THUMBNAIL_2,
  },
];

const coursesList2 = [
  {
    id: 0,
    title: 'The Ultimate Ui/Ux Course Beginner to Advanced',
    clsss_level: 'Beginner',
    creted_on: '12-12-21',
    duration: 30,
    instructor: 'James Morris',
    ratings: 4.9,
    price: 75,
    is_favourite: true,
    thumbnail: Images.THUMBNAIL_1,
  },
  {
    id: 1,
    title: 'Canava Graphic Design Course - Beginner',
    clsss_level: 'Beginner',
    creted_on: '12-02-2022',
    duration: 40,
    instructor: 'James Morris',
    ratings: 4.9,
    price: 75,
    is_favourite: false,
    thumbnail: Images.THUMBNAIL_2,
  },
  {
    id: 2,
    title: 'The Complete Presentation and speech',
    clsss_level: 'Intermediate',
    creted_on: '12-02-2022',
    duration: 50,
    instructor: 'James Morris',
    ratings: 4.9,
    price: 75,
    is_favourite: true,
    thumbnail: Images.THUMBNAIL_3,
  },
  {
    id: 3,
    title: 'The Ultimate React-Native Course  Advanced',
    clsss_level: 'Advanced',
    creted_on: '18-02-2022',
    duration: 10,
    instructor: 'John Wick',
    ratings: 4.9,
    price: 75,
    is_favourite: false,
    thumbnail: Images.THUMBNAIL_4,
  },
  {
    id: 4,
    title: 'The Ultimate Ui/Ux Course Advanced ',
    clsss_level: 'Advanced',
    creted_on: '18-02-2022',
    duration: 20,
    instructor: 'John Wick',
    ratings: 4.9,
    price: 75,
    is_favourite: false,
    thumbnail: Images.THUMBNAIL_4,
  },
  {
    id: 5,
    title: 'The javascript Course Advanced',
    clsss_level: 'Advanced',
    creted_on: '18-01-2022',
    duration: 50,
    instructor: 'John Wick',
    ratings: 4.9,
    price: 75,
    is_favourite: false,
    thumbnail: Images.THUMBNAIL_4,
  },
];

const topSearches = [
  {
    id: 0,
    label: 'React-native',
  },
  {
    id: 1,
    label: 'Modeling',
  },
  {
    id: 2,
    label: 'UI/UX',
  },
  {
    id: 3,
    label: 'Web',
  },
  {
    id: 4,
    label: 'Mobile',
  },
  {
    id: 5,
    label: 'Animation',
  },
];

const courseDetails = {
  id: 0,
  title: 'The Ultimate Ui/Ux Course Beginner to Advanced',
  number_of_students: '33.5k Students',
  duration: '2h 30m',
  instructor: {
    name: 'Alex',
    title: 'Full Stack Programmer',
  },
  videos: [
    {
      title: '1. Introduction',
      duration: '1:37',
      size: '10 MB',
      progress: '100%',
      is_playing: false,
      is_complete: true,
      is_lock: false,
      is_downloaded: false,
    },
    {
      title: '2. User Interface',
      duration: '1:15:00',
      size: '200 MB',
      progress: '100%',
      is_playing: true,
      is_complete: false,
      is_lock: false,
      is_downloaded: true,
    },
    {
      title: '3. User Experience',
      duration: '1:27:00',
      size: '230 MB',
      progress: '0%',
      is_playing: false,
      is_complete: false,
      is_lock: true,
      is_downloaded: false,
    },
  ],
  students: [
    {
      id: 0,
      name: 'Student 1',
      thumbnail: Images.STUDENT_1,
    },
    {
      id: 1,
      name: 'Student 2',
      thumbnail: Images.STUDENT_2,
    },
    {
      id: 2,
      name: 'Student 3',
      thumbnail: Images.STUDENT_3,
    },
    {
      id: 3,
      name: 'Student 3',
      thumbnail: Images.STUDENT_3,
    },
  ],
  files: [
    {
      id: 0,
      name: 'UI Fundamentals',
      author: 'Shared by Alex',
      upload_date: '13th Sep 2021',
      thumbnail: Images.PDF,
    },
    {
      id: 1,
      name: 'UX Checklist',
      author: 'Shared by Alex',
      upload_date: '11th Sep 2021',
      thumbnail: Images.DOC,
    },
    {
      id: 2,
      name: 'Sketch File',
      author: 'Shared by Alex',
      upload_date: '7th Sep 2021',
      thumbnail: Images.SKETCH,
    },
  ],
  discussions: [
    {
      id: 0,
      profile: Images.PROFILE,
      name: 'Alex',
      no_of_comments: '11 comments',
      no_of_likes: '72 likes',
      posted_on: '5 days ago',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      replies: [
        {
          id: 0,
          profile: Images.STUDENT_1,
          name: 'Alex',
          posted_on: '4 days ago',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          id: 1,
          profile: Images.STUDENT_1,
          name: 'Alex',
          posted_on: '4 days ago',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          id: 2,
          profile: Images.STUDENT_1,
          name: 'Alex',
          posted_on: '4 days ago',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          id: 3,
          profile: Images.STUDENT_1,
          name: 'Alex',
          posted_on: '4 days ago',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      ],
    },
    {
      id: 1,
      profile: Images.PROFILE,
      name: 'Alex',
      no_of_comments: '21 comments',
      no_of_likes: '372 likes',
      posted_on: '14 days ago',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      replies: [
        {
          id: 0,
          profile: Images.STUDENT_1,
          name: 'Alex',
          posted_on: '7 days ago',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          id: 1,
          profile: Images.STUDENT_1,
          name: 'Alex',
          posted_on: '7 days ago',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          id: 2,
          profile: Images.STUDENT_1,
          name: 'Alex',
          posted_on: '7 days ago',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      ],
    },
  ],
};

const notificationByDays = [
  {
    title: 'Today',
    data: [
      {
        id: 1,
        avatar: Images.STUDENT_1,
        name: 'Admin',
        created_at: '2h 47m ago',
        message:
          'Asked to join online courses regarding professional web designing.',
      },
      {
        id: 2,
        avatar: Images.STUDENT_2,
        name: 'Customer Care',
        created_at: '3h 02m ago',
        message: 'Your 50% discount code is: ON50DIS. Apply on checkout.',
      },
      {
        id: 3,
        avatar: Images.STUDENT_3,
        name: 'Lilian Ellis',
        created_at: '4h 32m ago',
        message: 'Asked assiged you to watch professional videography course.',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 4,
        avatar: Images.STUDENT_1,
        name: 'Admin',
        created_at: '16h 47m ago',
        message:
          'You just signed in from another device check inbox for more details.',
      },
      {
        id: 5,
        avatar: Images.STUDENT_2,
        name: 'Customer Care',
        created_at: '20h 02m ago',
        message: 'Your 50% discount code is: ON50DIS. Apply on checkout.',
      },
    ],
  },
];

const userSocialData = [
  {
    value: '8.8M',
    label: 'Followers',
  },
  {
    value: '1.8K',
    label: 'Reviews',
  },
  {
    value: '180M',
    label: 'Total Studant',
  },
];

const studentReview = [
  {
    id: 0,
    profile: Images.STUDENT_1,
    name: 'Alex',
    posted_on: '7 days ago',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 1,
    profile: Images.STUDENT_1,
    name: 'John',
    posted_on: '7 days ago',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 2,
    profile: Images.STUDENT_1,
    name: 'Fedric',
    posted_on: '7 days ago',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 3,
    profile: Images.STUDENT_1,
    name: 'Shin Chan',
    posted_on: '7 days ago',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const UserData = [
  {
    id: 0,
    icon: Icon.PROFILE,
    label: 'Name',
    Value: 'Alex',
  },
  {
    id: 1,
    icon: Icon.EMAIL,
    label: 'Email',
    Value: 'alex1234@outlook.com',
  },
  {
    id: 2,
    icon: Icon.LOCK,
    label: 'Password',
    Value: 'Updated 2 weeks ago',
  },
  {
    id: 2,
    icon: Icon.CALL,
    label: 'Contact Number',
    Value: '+91 123456789',
  },
];
const UserData2 = [
  {
    id: 0,
    icon: Icon.STAR,
    label: 'Pages',
  },
  {
    id: 1,
    icon: Icon.NEW_ICON,
    label: 'New Course notification',
  },
  {
    id: 2,
    icon: Icon.TIME,
    label: 'Study Reminder',
  },
];

const socialConnection = [
  {
    id: 0,
    name: 'Twitter',
    icon: Icon.TWITTER,
    Link: 'https://www.twitter.com/i/flow/login',
  },
  {
    id: 0,
    name: 'Linkdin',
    icon: Icon.LINKEDIN,
    Link: 'https://www.linkedin.com/in/pradeep-kumar-sharma-0152a11b7',
  },
];

const studentRating = [
  {
    label: 'Very Satisfied',
    count: 587,
    icons: Icon.HAPPY,
    color: 'orange',
  },
  {
    label: 'Satisfied',
    count: 327,
    icons: Icon.HAPPY,
    color: 'skyblue',
  },
  {
    label: 'Neutral',
    count: 200,
    icons: Icon.NEUTRAL,
    color: 'blue',
  },
  {
    label: 'Poor',
    count: 44,
    icons: Icon.SAD,
    color: 'red',
  },
];

export default {
  categories,
  coursesList1,
  coursesList2,
  topSearches,
  courseDetails,
  notificationByDays,
  studentReview,
  userSocialData,
  UserData,
  UserData2,
  socialConnection,
  studentRating,
};
