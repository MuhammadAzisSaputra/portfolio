export const sibuku = {
  name: 'Sibuku',
  shortName: 'Sibuku',
  slug: 'sibuku',
  route: '/projects/sibuku',
  category: 'Web App Development',
  projectType: 'Intern Project',
  role: 'Full Stack Web Developer',
  teamSize: 'Independent',
  timeline: 'April 2024 — May 2024',
  duration: '1 month',
  architecture: 'Yii2 MVC Framework',
  platform: 'Web Application',
  status: 'Completed',
  featured: true,
  featuredOrder: 3,
  summary: 'A Yii2-based bookstore management system integrating inventory, sales transactions, payments, courier handling, and automated reporting.',
  cardDescription: 'Designed relational database structures and implemented backend workflows for inventory, transactions, payments, and PDF/Excel reports.',
  technologies: {
    backend: ['PHP', 'Yii2 Framework'],
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    database: ['MySQL', 'XAMPP'],
    libraries: ['mPDF', 'PhpSpreadsheet', 'Kartik-v Widgets', 'CKEditor', 'yii2-multiple-input'],
  },
  assetDirectory: '/assets/projects/sibuku/',
  coverImage: '/assets/projects/sibuku/Thumbnail.png',
  links: {
    repository: null,
    liveDemo: null,
    apiDocumentation: null
  },
  caseStudy: {
    overview: [
      'Sibuku is a web-based information system developed to digitalize bookstore operational activities. The application integrates master data management, inventory management, sales transactions, payment processing, and automated reporting.',
      'The system helps bookstore administrators and employees manage the complete business workflow from book data management until sales reporting.'
    ],
    problem: [
      'Traditional bookstore management processes often face several challenges:',
      '- Difficulty monitoring book stock availability in real-time.',
      '- Sales transactions and payment records are not centralized.',
      '- Report generation requires manual data recap.',
      '- Supporting data such as customers, authors, couriers, and employees are separated.',
      'These problems reduce operational efficiency and increase the possibility of inconsistent data.'
    ],
    solution: [
      {
        title: 'Centralized System',
        description: 'Provides a single platform for managing bookstore operations with centralized master data management.'
      },
      {
        title: 'Inventory & Transactions',
        description: 'Structured warehouse inventory management alongside digital sales transaction processing and payment tracking.'
      },
      {
        title: 'Automated Operations',
        description: 'Features courier management and automated generation of PDF and Excel operational reports.'
      }
    ],
    keyFeatures: [
      {
        title: 'User Management',
        description: 'Provides authentication and access management for Administrator and Employee roles, including activity logging for operational history tracking.'
      },
      {
        title: 'Master Data Management',
        description: 'Manages important business entities such as Books, Authors, Customers, Banks, and Couriers.'
      },
      {
        title: 'Inventory Management',
        description: 'Manages warehouse data, book stock records, stock availability monitoring, and book movement tracking.'
      },
      {
        title: 'Transaction and Payment Management',
        description: 'Supports multiple book items in one transaction, price/weight/shipping cost calculation, online/offline transaction types, payment confirmation, and courier tracking number management.'
      },
      {
        title: 'Reporting System',
        description: 'Automatically generates sales, financial, and stock reports with export formats for PDF and Excel.'
      }
    ],
    contribution: {
      role: 'Full Stack Web Developer',
      focus: 'I developed the application workflow from backend logic, frontend interface, and database integration.',
      sections: [
        {
          title: 'Backend Development',
          implementation: [
            'Developed backend architecture using PHP >= 7.4 and the Yii2 Framework.',
            'Responsibilities included controller development, business process implementation, authentication flow, transaction processing, report generation logic, and database interaction using ActiveRecord.'
          ]
        },
        {
          title: 'Frontend Development',
          implementation: [
            'Implemented user interfaces using HTML5, CSS3, JavaScript, and Bootstrap 5.',
            'Designed and developed the dashboard interface, data management pages, transaction forms, and reporting interfaces.'
          ]
        },
        {
          title: 'Database Development',
          implementation: [
            'Designed relational database structures for books, authors, warehouse stock, customers, transactions, and payments.'
          ]
        }
      ]
    },
    architecture: {
      image: {
        src: '/assets/projects/sibuku/System Architecture.png',
        alt: 'Yii2 System Architecture'
      }
    },
    databaseDesign: {
      image: {
        src: '/assets/projects/sibuku/Database Design.png',
        alt: 'Database Design'
      }
    },
    frontend: {
      images: [
        { src: '/assets/projects/sibuku/databuku-admin-dark.png', alt: 'Book Data Management' },
        { src: '/assets/projects/sibuku/datatransaksi-admin-dark.png', alt: 'Transaction Processing' },
        { src: '/assets/projects/sibuku/datalaporan-admin-dark.png', alt: 'Automated Reporting' }
      ]
    },
    workflow: {
      image: {
        src: '/assets/projects/sibuku/Application Workflow.png',
        alt: 'Application Workflow'
      }
    },
    challenges: [
      {
        title: 'Multiple Book Items Transaction',
        challenge: 'A single transaction may contain multiple books and quantities.',
        solution: 'Implemented multiple input handling using Yii2 extension and JSON-based item storage.'
      },
      {
        title: 'Data Consistency',
        challenge: 'Maintaining consistent data format between interface and database.',
        solution: 'Used Yii2 ActiveRecord lifecycle methods such as beforeSave() and afterFind() for validation and data transformation.'
      },
      {
        title: 'Automated Reporting',
        challenge: 'Generating professional reports from dynamic database data.',
        solution: 'Integrated mPDF for PDF generation and PhpSpreadsheet for Excel export.'
      }
    ],
    outcome: [
      'Sibuku successfully transformed bookstore operational activities into a digital workflow.',
      'The system provides automated inventory management, integrated sales transactions, payment management, courier management, and report generation.',
      'The project demonstrates implementation of a complete business information system using MVC architecture.'
    ],
    learnings: [
      {
        title: 'MVC Framework Development',
        description: 'Improved understanding of Yii2 MVC architecture and application lifecycle.'
      },
      {
        title: 'Database Modeling',
        description: 'Experienced designing relational databases for inventory and transaction systems.'
      },
      {
        title: 'Third-party Integration',
        description: 'Learned managing external PHP packages using Composer.'
      },
      {
        title: 'Business System Development',
        description: 'Improved ability to translate real business processes into software workflows.'
      }
    ],
    credits: 'Sibuku was developed as a bookstore management information system focused on improving inventory, transaction, and reporting efficiency.'
  }
};
