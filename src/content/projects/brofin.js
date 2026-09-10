export const brofin = {
  name: 'Brofin — Brother Financial',
  shortName: 'Brofin',
  slug: 'brofin',
  route: '/projects/brofin',
  category: 'Machine Learning / Product Development',
  projectType: 'Product-based Capstone Project',
  role: 'Machine Learning Engineer',
  teamSize: '7 members',
  timeline: 'September 2024 — January 2025',
  duration: '6 months',
  platform: 'Android',
  status: 'Completed',
  featured: true,
  featuredOrder: 4,
  summary: 'A financial-planning application designed to help young users manage budgeting and long-term goals through financial-management and machine-learning features.',
  cardDescription: 'Contributed to data preparation, model development, evaluation, and integration within a seven-member Machine Learning, Cloud, and Mobile team.',
  technologies: {
    machineLearning: ['TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Google Colab', 'Jupyter Notebook', 'Matplotlib', 'Seaborn'],
    mobileDevelopment: ['Android Studio', 'Kotlin', 'Jetpack Compose', 'Room', 'DataStore', 'Retrofit', 'OkHttp', 'Hilt', 'Lottie', 'Coil'],
    cloudBackend: ['Firestore', 'Cloud Run', 'App Engine', 'Cloud Storage', 'API services', 'Authentication services']
  },
  assetDirectory: '/assets/projects/brofin/',
  coverImage: '/assets/projects/brofin/App Show.png',
  links: {
    repository: 'https://github.com/CP-Finance-Goals',
    liveDemo: null,
    apiDocumentation: null
  },
  caseStudy: {
    overview: [
      'Brofin (Brother Financial) is a product-based capstone project designed to help Gen Z, young professionals, and users with long-term financial goals manage their finances more effectively through budgeting, financial goal planning, and machine-learning-powered features.',
      'Developed by a multidisciplinary 7-member team, it helps users move from simply tracking their money to planning how their current financial condition can support future goals.'
    ],
    problem: [
      'Young users may understand the importance of financial planning but still struggle to apply it consistently in daily life.',
      'The project identifies several challenges:',
      '- Difficulty tracking spending and controlling expenses',
      '- Difficulty achieving long-term financial goals',
      '- Irregular income patterns among young professionals and freelancers',
      '- Increasing prices of necessities and property',
      'The core question: How might we help young users manage their current finances while making long-term financial goals more realistic and measurable?'
    ],
    solution: [
      {
        title: 'Budgeting',
        description: 'Applies the 50-30-20 budgeting principle to help users allocate their income between needs, wants, and savings.'
      },
      {
        title: 'Financial Goal Planning',
        description: 'Allows users to define financial goals and track the amount of money they need to set aside.'
      },
      {
        title: 'Financial Prediction',
        description: 'Uses machine learning to predict house-price-related scenarios and estimate when a user may reach a financial goal.'
      },
      {
        title: 'Product Recommendation',
        description: 'A recommendation system that matches products with the user\'s budget and selected category (Cars, Gadgets, Motorcycles, Games, Luxury goods).'
      }
    ],
    contribution: {
      role: 'Machine Learning Engineer',
      focus: 'My contribution focused on the Machine Learning component of Brofin, working alongside Cloud Computing and Mobile Development teams.',
      sections: [
        {
          title: 'Data Preparation',
          implementation: [
            'Collected, cleansed, and preprocessed datasets for model development.'
          ]
        },
        {
          title: 'Model Development',
          implementation: [
            'Developed, trained, validated, tested, and evaluated machine learning models.'
          ]
        },
        {
          title: 'Model Integration',
          implementation: [
            'Prepared models to be deployed and integrated with the application through cloud/API services.'
          ]
        },
        {
          title: 'Cross-Functional Collaboration',
          implementation: [
            'Worked together with mobile app, backend, and cloud teams to ensure smooth data flow and functional ML integration.'
          ]
        }
      ]
    },
    architecture: {
      description: 'Brofin combines an Android application, Cloud API services, a Cloud Database, Authentication, and Deployed ML Models.',
      image: {
        src: '/assets/projects/brofin/System Architecture.png',
        alt: 'System Architecture'
      }
    },
    workflow: {
      description: 'Simplified user workflow covering Authentication, Dashboard, Financial Data Tracking, and ML Insights.',
      image: {
        src: '/assets/projects/brofin/Application Workflow.png',
        alt: 'Application Workflow'
      }
    },
    frontend: {
      description: 'The mobile application was built using Kotlin and Jetpack Compose.',
      images: [
        { src: '/assets/projects/brofin/Homepage.jpg', alt: 'Homepage Dashboard' },
        { src: '/assets/projects/brofin/Budgeting.jpg', alt: 'Budgeting Feature' },
        { src: '/assets/projects/brofin/Prediksi Rumah - Fill1.jpg', alt: 'House Planning Prediction' }
      ]
    },
    challenges: [
      {
        title: 'Dataset Quality',
        challenge: 'Machine-learning performance can be affected by the quality and relevance of training data.',
        solution: 'Explicitly included data collection, cleansing, model validation, testing, and evaluation in the workflow.'
      },
      {
        title: 'Limited Cloud Resources',
        challenge: 'The team had to manage Google Cloud resource consumption and available credits.',
        solution: 'Changed the database approach from Cloud SQL to Firestore to preserve cloud credits while supporting app requirements.'
      },
      {
        title: 'Cross-Team Integration',
        challenge: 'Brofin required the ML, mobile, and cloud components to work together seamlessly.',
        solution: 'Explicitly identified the need to connect backend services with the mobile application and ML models during planning.'
      }
    ],
    outcome: [
      'Project Status: 100% Completed.',
      'The final product combines conventional financial-management functionality with machine-learning-powered prediction and recommendation features.',
      'Successfully deployed an Android mobile application integrated with Cloud/API backend and ML workflows.'
    ],
    learnings: [
      {
        title: 'Machine Learning in a Product Context',
        description: 'Building an ML model is only one part; it must connect to app requirements, APIs, deployment infrastructure, and user-facing functionality.'
      },
      {
        title: 'Engineering Trade-offs',
        description: 'The Cloud SQL to Firestore change demonstrated that technical decisions consider cost, existing implementation, and resources, not just theory.'
      },
      {
        title: 'Cross-Functional Collaboration',
        description: 'Highlighted the importance of clearly defining interfaces and data flow between ML, Mobile Development, and Cloud Computing teams.'
      }
    ],
    credits: 'Brofin was developed as a product-based capstone project by a multidisciplinary team across Machine Learning, Cloud Computing, and Mobile Development (Team ID: C242-PS338).'
  }
};
