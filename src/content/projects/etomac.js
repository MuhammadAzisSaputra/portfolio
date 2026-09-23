export const etomac = {
  name: 'Etomac',
  shortName: 'Etomac',
  slug: 'etomac',
  route: '/projects/etomac',
  category: 'Web App Development',
  projectType: 'Freelance Project',
  role: 'Full Stack Web Developer',
  teamSize: 'Independent',
  timeline: 'January 2025',
  duration: '1 week',
  platform: 'Web Application',
  status: 'Completed',
  featured: false,
  featuredOrder: 6,
  summary: 'A specialized e-commerce platform for agricultural and industrial heavy equipment with catalog, cart, checkout, shipping simulation, payment proof, and order-management flows.',
  cardDescription: 'Built independently using HTML, CSS, JavaScript, Bootstrap, native PHP, and MySQL.',
  technologies: {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    backend: ['PHP Native', 'Session Management'],
    database: ['MySQL', 'MariaDB'],
    server: ['Apache', 'XAMPP']
  },
  assetDirectory: '/assets/projects/etomac/',
  coverImage: '/assets/projects/etomac/Thumbnail.png',
  thumbnailImage: '/assets/projects/etomac/thumbnail-optimized.webp',
  links: {
    repository: null,
    liveDemo: null,
    apiDocumentation: null
  },
  caseStudy: {
    overview: [
      'Etomac is a web-based e-commerce application designed specifically for selling heavy equipment, especially tractors for agricultural and industrial needs.',
      'The application provides a complete digital transaction workflow including product browsing, category filtering, shopping cart management, checkout, shipping simulation, payment proof upload, and order management.'
    ],
    problem: [
      'Traditional heavy equipment purchasing processes often require direct communication with sellers and manual transactions.',
      'Users may face difficulties finding specialized platforms, comparing specifications, understanding prices, and estimating logistics costs.',
      'Etomac was developed to provide a centralized marketplace specifically for heavy equipment transactions.'
    ],
    solution: [
      {
        title: 'Product Discovery',
        description: 'Digital heavy equipment catalog with product detail pages, search, and category filtering.'
      },
      {
        title: 'Transaction Flow',
        description: 'Shopping cart, checkout workflow, shipping cost simulation, and payment proof submission.'
      },
      {
        title: 'Management Dashboard',
        description: 'Customer order history tracking and an admin management dashboard for fulfilling orders.'
      }
    ],
    contribution: {
      role: 'Full Stack Web Developer',
      focus: 'My responsibilities covered frontend development, backend logic, and database implementation during the 1-week timeline.',
      sections: [
        {
          title: 'Frontend Development',
          implementation: [
            'Implemented the product catalog interface, product detail display, shopping cart interface, and checkout pages.',
            'Ensured a responsive layout using HTML5, CSS3, JavaScript, and Bootstrap.'
          ]
        },
        {
          title: 'Backend Development',
          implementation: [
            'Developed PHP-based application logic covering the authentication system, session management, product processing, cart handling, checkout processing, payment upload handling, and order management.'
          ]
        },
        {
          title: 'Database Design',
          implementation: [
            'Designed relational structures for user accounts, product categories, products, product variations, orders, and payments using MySQL.'
          ]
        }
      ]
    },
    architecture: {
      description: 'The application follows a standard LAMP stack architecture where client browsers communicate with an Apache server running native PHP scripts and a MySQL database, along with a custom shipping simulation module.',
      image: {
        src: '/assets/projects/etomac/System Architecture.png',
        alt: 'System Architecture'
      }
    },
    databaseDesign: {
      image: {
        src: '/assets/projects/etomac/Database Relationship.png',
        alt: 'Database Relationship Diagram'
      }
    },
    workflow: {
      description: 'The e-commerce transaction workflow from product discovery to admin validation.',
      image: {
        src: '/assets/projects/etomac/Application Workflow.png',
        alt: 'Application Workflow'
      }
    },
    frontend: {
      images: [
        { src: '/assets/projects/etomac/detailproduk-pelanggan.png', alt: 'Product Detail Interface' },
        { src: '/assets/projects/etomac/checkout-pelanggan.png', alt: 'Checkout Workflow' },
        { src: '/assets/projects/etomac/dashboard-admin.png', alt: 'Admin Management Dashboard' }
      ]
    },
    challenges: [
      {
        title: 'Heavy Equipment Shipping Logic',
        challenge: 'Calculating shipping costs for heavy equipment is complex due to extreme weight and specialized transportation requirements.',
        solution: 'Implemented a custom shipping simulation logic to maintain complete checkout functionality within constraints.'
      },
      {
        title: 'Complex Product Structure',
        challenge: 'Products require multiple classifications such as type, edition, and color variants.',
        solution: 'Implemented normalized database tables with relational connections to handle variations dynamically.'
      },
      {
        title: 'Stock Validation',
        challenge: 'Maintaining accurate inventory during simultaneous transactions.',
        solution: 'Added strict stock validation during the checkout process before order confirmation is finalized.'
      }
    ],
    outcome: [
      'Etomac successfully implemented a complete heavy equipment e-commerce workflow within a 1-week deadline.',
      'The final application includes functional product management, customer authentication, a shopping cart, a checkout system, payment handling, and admin order validation.'
    ],
    learnings: [
      {
        title: 'Full-Stack Development',
        description: 'Gained experience rapidly designing full-stack web applications under tight deadlines.'
      },
      {
        title: 'E-Commerce Logic',
        description: 'Learned how to develop standard transaction workflows, manage backend business logic, and validate stock dynamically.'
      }
    ],
    credits: 'Etomac was built independently as a freelance project to provide a specialized heavy equipment e-commerce solution.'
  }
};
