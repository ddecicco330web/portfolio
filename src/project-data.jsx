const projects = [
  {
    id: 1,
    name: 'myFlix (React)',
    short_description:
      'An app that allows users to search for movies and add them to a list of favorites.',
    description:
      'This is an app developed using the MERN stack. This app allows you to search for information about movies and add a list of your favorite movies.',
    image: 'imgs/myFlix-React/main_view.png',
    image_position: 'horizontal',
    skills: ['React', 'React Bootstrap', 'Redux', 'JSX'],
    gh_link: 'https://github.com/ddecicco330web/myFlix-client',
    live_link: 'https://myflix330.netlify.app/login',
    case_study: true,
    case_study_imgs: [
      'imgs/myFlix-React/main_view.png',
      'imgs/myFlix-React/models.png',
      'imgs/myFlix-React/movie_view.png'
    ],
    overview:
      'myFlix is a project using the MERN stack, that displays information about various kinds of movies like actors, directors, and trailers. Users can create an account and make a list of their favorite movies.',
    purpose:
      'myFlix is a project I built during my web development course at CareerFoundry. The purpose of this project is to demonstrate my skills in creating a React web application.',
    objective:
      'The objective of this project was to have a full-stack project to add to my portfolio. I wanted to build a server-side and client-side application from scratch. During this project, I tried to mirror some functionalities you would see on websites like IMDB like clicking on actors to see other movies they are in.',
    approach: [
      {
        title: 'Server Side Approach',
        description:
          'I created a RESTful API using Node.js and Express that interacts with a non-relational database (MongoDB).',
        steps: [
          'I created endpoints that are accessed using HTTP requests like GET and POST methods. The endpoints can query and update the database by using CRUD methods. Each endpoint was tested using Postman.',
          'I created models and schemas to keep the data from my MongoDB consistent.',
          'I used JWT Authentification to make sure only authorized users can make HTTP requests. I also used CORS password hashing and data validation to protect the data.',
          'I used Heroku to deploy my app and MongoDB Atlas to host the database.'
        ]
      },
      {
        title: 'Client Side Approach',
        description:
          'After building the API, I started building the interface users need to access and interact with the server-side data.',
        steps: [
          'The page is a single page app that has many views the user can switch to. Some of the views I implemented are the main view (where the user can view and search for movies), movie view (where the user can view more info on a single movie), profile view (where the user can update the user info), login, and sign up view. This was a good starting point to have basic functionality for the app.',
          'I used React Bootstrap to make the app responsive and to customize UI elements.',
          'I used Redux to simplify state changes by reducing the amount of props I have to passthrough to each component.',
          'Later in the project, I decided to add some features that I saw on IMDB. For example, adding an actor and director view (where the user can see more info about that person) and adding movie trailers to the movie view.'
        ]
      }
    ],
    challenges:
      'This has been the most enjoyable and challenging project I had during the course at CareerFoundry. I enjoyed adding features that resemble other movie sites like viewing trailers and viewing actor and director information. I also enjoyed becoming more accustomed to using the terminal. Learning about Redux was also very exciting for me because it is very different from how I kept track of the app state before. The most challenging part of the project was getting used to how to use the React hooks properly. This required me to do some more research and acquire a better understanding of React.',
    improvements:
      'In another iteration, I would like to put more effort into the design of the UI and add other features that are included in IMDB like a watch list, user ratings, etc.',
    conclusion:
      "Overall, I'm very proud of this project because it was my first time building an API from scratch. I also had a lot of fun using React and Redux for the first time. Adding little things like movie trailers made me feel a lot of excitement because it was satisfying to be able to make my website more like one from a bigger company like IMDB. One thing I learned that I need to improve on is making the UI more pleasing to look at. This project makes me look forward to making more React projects."
  },
  {
    id: 2,
    name: 'chat',
    short_description:
      'An app that allows users to chat with each other in real time.',
    description:
      'The purpose of this project was to develop a mobile app using React Native and Firebase.',
    image: 'imgs/Chat_app.jpg',
    image_position: 'vertical',
    skills: ['React Native', 'Javascript', 'CSS', 'Firebase'],
    gh_link: 'https://github.com/ddecicco330web/chat',
    case_study: false,
    case_study_imgs: ['', '', ''],
    overview: '',
    purpose: '',
    objective: '',
    approach: [
      {
        title: '',
        description: '',
        steps: ['', '', '', '']
      }
    ],
    challenges: '',
    improvements: '',
    conclusion: ''
  }
];

export default projects;
