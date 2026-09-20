export const grahaRaya = {
  name: 'Graha Raya',
  shortName: 'Graha Raya',
  slug: 'graha-raya-project-management',
  route: '/projects/graha-raya-project-management',
  category: 'Web App Development',
  projectType: 'Freelance Project',
  role: 'Full Stack Web Developer',
  teamSize: 'Independent',
  timeline: 'March 2025 — April 2025',
  duration: '1 month',
  platform: 'Web Application',
  architecture: 'Custom MVC PHP Native',
  status: 'Completed',
  featured: true,
  featuredOrder: 2,
  summary: 'A web-based project-management information system designed to centralize client data, payments, scheduling, field progress reporting, and approval workflows.',
  cardDescription: 'Implemented role-based access for Admin, Project Manager, and Mandor with structured project-progress approval and notification flows.',
  technologies: {
    backend: ['PHP 8', 'Custom MVC Architecture'],
    frontend: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap 5'],
    database: ['MySQL', 'MariaDB'],
    libraries: ['PACE Loading Indicator', 'Perfect Scrollbar', 'MetisMenu', 'Bootstrap Icons', 'Ionicons']
  },
  assetDirectory: '/assets/projects/graha-raya/',
  coverImage: '/assets/projects/graha-raya/Thumbnail.png',
  links: {
    repository: null,
    liveDemo: null,
    apiDocumentation: null
  },
  caseStudy: {
    overview: [
      'Aplikasi Manajemen Proyek CV Graha Raya Consultant is a web-based information system developed to digitalize the complete project management workflow, from client management, project creation, payment tracking, scheduling, field progress reporting, until project approval.',
      'The system focuses on improving collaboration between three main stakeholders: Admin, Project Manager, and Mandor (Field Supervisor) through a centralized platform with Role-Based Access Control (RBAC).'
    ],
    problem: [
      'Before system implementation, project monitoring and operational management faced several challenges:',
      '- Field progress monitoring was still performed manually.',
      '- Communication between office teams and field workers could cause delays.',
      '- Payment records, schedules, and project documentation were not centralized.',
      '- Progress updates from field teams lacked a structured approval mechanism.',
      'These challenges created difficulties in monitoring project performance, evaluating progress, and maintaining historical project records.'
    ],
    solution: [
      {
        title: 'Admin',
        description: 'Managing employee data, client data, creating projects, recording client payments, and supervising overall project information.'
      },
      {
        title: 'Project Manager',
        description: 'Creating project schedules, managing project stages, reviewing field progress, and approving or rejecting progress submissions.'
      },
      {
        title: 'Mandor',
        description: 'Receiving project assignments, reporting field progress, and uploading progress evidence such as photos and documents.'
      }
    ],
    keyFeatures: [
      {
        title: 'Role-Based Access Control',
        description: 'Dynamic access management for Admin, Project Manager, and Mandor. Each role receives different dashboards and permissions.'
      },
      {
        title: 'Master Data Management',
        description: 'CRUD functionality for employee data, client data, and role management.'
      },
      {
        title: 'Project Management',
        description: 'Project creation, documentation upload (RAB/quotation, work drawings), PIC assignment, and status monitoring.'
      },
      {
        title: 'Payment Management',
        description: 'Manages down payment, project installments, and final payment. Each payment record can include payment evidence upload.'
      },
      {
        title: 'Project Scheduling',
        description: 'Project managers can define planned start date, planned completion date, and project stage timelines.'
      },
      {
        title: 'Progress Approval System',
        description: 'Field workers can submit progress updates, work notes, and photo evidence. Project managers can review submissions and approve or reject progress.'
      },
      {
        title: 'Internal Notification System',
        description: 'System provides notifications for payment updates, progress submissions, and approval status changes.'
      }
    ],
    contribution: {
      role: 'Full Stack Web Developer',
      focus: 'I was responsible for designing and implementing the complete application workflow.',
      sections: [
        {
          title: 'Backend Development',
          implementation: [
            'Developed application logic using PHP 8 and Custom MVC Architecture.',
            'Responsibilities included routing system, authentication flow, role authorization, business logic implementation, database interaction, and notification handling.'
          ]
        },
        {
          title: 'Frontend Development',
          implementation: [
            'Implemented user interfaces using HTML5, CSS3, JavaScript ES6+, and Bootstrap 5.',
            'Responsibilities included dashboard interface, role-based pages, form handling, data visualization components, and responsive layout.'
          ]
        },
        {
          title: 'Database Development',
          implementation: [
            'Designed database structures for user management, client management, project management, payment tracking, scheduling, and progress history.'
          ]
        }
      ]
    },
    architecture: {
      image: {
        src: '/assets/projects/graha-raya/System Architecture.png',
        alt: 'System Architecture'
      }
    },
    databaseDesign: {
      image: {
        src: '/assets/projects/graha-raya/Database Design.png',
        alt: 'Database Design'
      }
    },
    frontend: {
      images: [
        { src: '/assets/projects/graha-raya/pembayaran-admin-dark.png', alt: 'Admin Payment Management' },
        { src: '/assets/projects/graha-raya/penjadwalan-pm-dark.png', alt: 'Project Manager Scheduling' },
        { src: '/assets/projects/graha-raya/tahapanaktif-mandor-dark.png', alt: 'Mandor Active Stages' }
      ]
    },
    workflow: {
      image: {
        src: '/assets/projects/graha-raya/Application Workflow.png',
        alt: 'Application Workflow'
      }
    },
    challenges: [
      {
        title: 'Multi-condition Project Workflow',
        challenge: 'Project status depends on multiple conditions, such as payment approval before scheduling.',
        solution: 'Implemented controlled state flow logic inside controllers to validate project conditions before allowing actions.'
      },
      {
        title: 'Dynamic Role Permission',
        challenge: 'Three different user roles require different permissions in one application.',
        solution: 'Implemented RBAC middleware integrated with routing and separated views based on user roles.'
      },
      {
        title: 'Notification Management',
        challenge: 'Different stakeholders need different notifications depending on project activities.',
        solution: 'Created centralized notification handling triggered after important database events.'
      }
    ],
    outcome: [
      'The application successfully provides a structured workflow for CV Graha Raya Consultant project management.',
      'The system improves project monitoring, communication between office and field teams, payment tracking, progress validation, and historical documentation.',
      'The application demonstrates implementation of a complete business information system with role-based workflow.'
    ],
    learnings: [
      {
        title: 'MVC Architecture',
        description: 'Learned how to structure PHP applications into Router, Controller, Model, and View to improve maintainability.'
      },
      {
        title: 'Database Modeling',
        description: 'Improved experience designing relational database structures for complex business processes.'
      },
      {
        title: 'Business Workflow Development',
        description: 'Learned that software systems must represent real operational processes, not only CRUD functionality.'
      },
      {
        title: 'Access Control',
        description: 'Gained experience implementing secure role-based access management.'
      }
    ],
    credits: 'This project was developed as a full-stack web information system for managing construction project operations at CV Graha Raya Consultant.'
  }
};
