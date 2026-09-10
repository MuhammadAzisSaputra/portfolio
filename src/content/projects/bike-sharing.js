export const bikeSharing = {
  name: 'Bike-Sharing Analysis Dashboard',
  shortName: 'Bike-Sharing Dashboard',
  slug: 'bike-sharing-dashboard',
  route: '/projects/bike-sharing-dashboard',
  category: 'Data Analytics / Dashboard',
  projectType: 'Data Analytics Project',
  role: 'Data Analyst',
  platform: 'Interactive Dashboard',
  status: 'Completed',
  featured: false,
  featuredOrder: 5,
  summary: 'An interactive Streamlit dashboard for exploring bike-sharing demand patterns across seasons, hours, and user types.',
  cardDescription: 'Used Python, Pandas, Plotly, and Streamlit to prepare data, analyze usage patterns, and communicate insights through interactive visualizations.',
  technologies: {
    programming: ['Python'],
    dataProcessing: ['Pandas', 'NumPy'],
    visualization: ['Plotly', 'Matplotlib', 'Seaborn'],
    dashboard: ['Streamlit'],
    environment: ['Conda', 'Virtual Environment', 'Pipenv']
  },
  assetDirectory: '/assets/projects/bike-sharing/',
  coverImage: '/assets/projects/bike-sharing/simple_dashboard.png',
  links: {
    repository: null,
    liveDemo: null,
    apiDocumentation: null
  },
  caseStudy: {
    overview: [
      'This project focuses on analyzing bike-sharing usage patterns and presenting the findings through an interactive dashboard.',
      'The objective is to transform raw bike-sharing data into meaningful insights related to user behavior, ride demand patterns, seasonal trends, and hourly usage.'
    ],
    problem: [
      'Bike-sharing services generate large amounts of usage data that can be analyzed to understand customer behavior.',
      'This project aims to answer analytical questions such as:',
      '- How does bike usage change across different seasons?',
      '- What hours have the highest ride activity?',
      '- How do casual users and registered users behave differently?',
      '- How can historical usage patterns support operational decisions?'
    ],
    solution: [
      {
        title: 'Exploratory Data Analysis',
        description: 'Analyzed the bike-sharing dataset to uncover seasonal changes and hourly distribution patterns for casual vs. registered users.'
      },
      {
        title: 'Interactive Dashboard',
        description: 'Developed an interactive Streamlit application to visualize summary metrics, seasonal comparisons, and hourly trends with date filtering.'
      }
    ],
    contribution: {
      role: 'Data Analyst',
      focus: 'I performed the complete analytical workflow from data cleaning to dashboard development.',
      sections: [
        {
          title: 'Data Preparation & Cleaning',
          implementation: [
            'Loaded the dataset using Pandas, converted date columns into datetime format, and prepared aggregated data.',
            'Grouped data based on season, hour, and user type.'
          ]
        },
        {
          title: 'Data Visualization & Dashboarding',
          implementation: [
            'Designed interactive charts using Plotly and built the dashboard interface using Streamlit to present findings clearly.'
          ]
        }
      ]
    },
    analysis: {
      description: 'The project follows a descriptive analytics approach, focusing on understanding historical behavior through data visualization.',
      steps: [
        'Prepare clean data from the raw dataset',
        'Aggregate information based on analytical dimensions (Season, Hour)',
        'Visualize trends (Seasonal Usage, Hourly Activity)',
        'Interpret usage patterns between Casual and Registered users'
      ]
    },
    dashboard: {
      description: 'The final output is an interactive dashboard built using Streamlit that enables users to dynamically filter and explore the data.',
      features: [
        'Summary Metrics: Total rides, casual rides, and registered rides',
        'Seasonal Visualization: Bar chart comparing ride volume across seasons',
        'Hourly Visualization: Line chart displaying bike-sharing activity patterns throughout the day',
        'Date Filtering: Dynamic dashboard updates based on a selected date range'
      ],
      images: [
        { src: '/assets/projects/bike-sharing/simple_dashboard.png', alt: 'Bike-Sharing Interactive Dashboard' }
      ]
    },
    architecture: {
      description: 'The dashboard architecture relies on Pandas for data processing and Plotly for visualization, all served through a Streamlit application.',
      image: {
        src: '/assets/projects/bike-sharing/Architecture.png',
        alt: 'Dashboard Architecture'
      }
    },
    workflow: {
      description: 'Data Analysis Workflow from Raw Dataset to Interactive Dashboard.',
      image: {
        src: '/assets/projects/bike-sharing/Workflow.png',
        alt: 'Data Analysis Workflow'
      }
    },
    outcome: [
      'The final dashboard provides an accessible interface for exploring bike-sharing usage patterns.',
      'The insights generated can support operational decisions such as fleet availability planning, resource allocation, and service optimization.',
      'This project successfully demonstrates the ability to process real-world datasets, perform exploratory data analysis, and communicate insights through interactive visualizations.'
    ],
    learnings: [
      {
        title: 'Data Processing',
        description: 'Improved skills in data cleaning, transformation, and aggregation using Pandas.'
      },
      {
        title: 'Interactive Visualization',
        description: 'Gained experience in selecting appropriate charts and designing dashboards with Plotly and Streamlit.'
      },
      {
        title: 'Analytical Thinking',
        description: 'Practiced translating raw data into actionable insights to support decision-making.'
      }
    ],
    credits: 'This project was developed as a Data Analytics project focused on understanding bike-sharing demand patterns through interactive visualization.'
  }
};
