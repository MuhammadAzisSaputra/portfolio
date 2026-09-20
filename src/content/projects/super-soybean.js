export const superSoybean = {
  name: 'Super Soybean',
  shortName: 'Super Soybean',
  slug: 'super-soybean',
  route: '/projects/super-soybean',
  category: 'Computer Vision',
  projectType: 'Product-based Research Project',
  role: 'AI Engineer',
  teamSize: '4 Members',
  timeline: 'September 2025 — December 2025',
  duration: '3 Months',
  platform: 'Web Application',
  status: 'Completed',
  featured: true,
  featuredOrder: 1,
  summary: 'A computer-vision web platform developed to support soybean phenotypic analysis through automated image-based detection and research workflows.',
  cardDescription: 'Developed and benchmarked YOLO-based seed detection models and integrated the selected model into a Flask application supporting image and real-time inference.',
  keyMetric: '92.01% mAP@0.5:0.95',
  evidence: [
    'Precision: 0.99735',
    'Inference: 16.63 ms',
    'FPS: 60.13'
  ],
  technologies: {
    artificialIntelligence: ['YOLO26', 'PyTorch', 'Ultralytics', 'Computer Vision'],
    backend: ['Python', 'Flask', 'OpenCV'],
    frontend: ['HTML', 'CSS', 'JavaScript'],
    developmentEnvironment: ['Google Colab', 'GPU Training Environment']
  },
  assetDirectory: '/assets/projects/super-soybean/',
  coverImage: '/assets/projects/super-soybean/Thumbnail.png',
  links: {
    repository: null,
    liveDemo: null,
    apiDocumentation: null
  },
  caseStudy: {
    overview: [
      'Super Soybean is an intelligent web platform developed to support soybean breeding research through Computer Vision technology.',
      'The application provides an integrated environment for analyzing soybean phenotypic characteristics and brings multiple AI-based features into one responsive web application.',
      'Supported modules: Seed Counting, Pod Counting, Classification, Variety Identification, and Chlorophyll Prediction.'
    ],
    problem: [
      'Phenotypic data collection is important in soybean breeding research, but traditional observation methods can be:',
      '- Time-consuming',
      '- Repetitive',
      '- Dependent on manual counting',
      '- Vulnerable to human error',
      'The project requires an image-based automated analysis platform that can provide faster and more consistent results.'
    ],
    solution: [
      {
        title: 'Seed Counting',
        description: 'Automatic soybean seed detection and counting supporting image upload and real-time detection.'
      },
      {
        title: 'Pod Counting',
        description: 'Pod detection and seed quantity estimation inside pods.'
      },
      {
        title: 'Classification',
        description: 'Soybean-condition classification from visual characteristics.'
      },
      {
        title: 'Variety Identification',
        description: 'Soybean-variety similarity analysis.'
      },
      {
        title: 'Chlorophyll Prediction',
        description: 'Chlorophyll-level estimation using leaf visual features.'
      }
    ],
    contribution: {
      role: 'AI Engineer & Fullstack Developer',
      focus: 'The contribution covered the AI development pipeline, application interface design, and backend integration. The strongest technical focus is YOLO26 Seed Counting.',
      sections: [
        {
          title: 'AI Development — Soybean Seed Counting',
          objective: 'Develop an object-detection model capable of detecting and counting soybean seeds, including cases where objects are small, close together, or overlapping.',
          process: [
            'Dataset Collection',
            'Data Annotation',
            'Data Augmentation',
            'Model Training',
            'Model Evaluation',
            'Model Integration'
          ],
          implementationTitle: 'Model Implementation',
          implementation: [
            'The seed counting feature was developed using YOLO26 Object Detection, Ultralytics, and PyTorch.',
            'Augmented soybean seed images were used to improve detection performance in cluttered conditions.'
          ]
        }
      ]
    },
    performance: {
      metrics: [
        { label: 'mAP@0.5:0.95', value: '0.92005' },
        { label: 'Precision', value: '0.99735' },
        { label: 'Inference Speed', value: '16.63 ms' },
        { label: 'FPS', value: '60.13' }
      ]
    },
    performanceImage: {
      src: '/assets/projects/super-soybean/hitungbijiuploadhasil-deploy-web-dark.png',
      alt: 'Seed Counting Inference Result',
      caption: 'Seed Counting Inference Result using YOLO26'
    },
    architecture: {
      description: 'The system architecture consists of a Researcher interacting with a Web Interface, which sends requests to a Flask Backend. The backend routes features to the YOLO26 Seed Detection model or other AI models. The detection results are then returned to the Web Interface.',
      image: {
        src: '/assets/projects/super-soybean/System Architecture.png',
        alt: 'Super Soybean System Architecture'
      },
      flow: [
        'Researcher',
        'Web Interface',
        'Flask Backend',
        'Feature Routing',
        'YOLO26 Seed Detection & Other AI Models',
        'Detection Result',
        'Web Interface'
      ]
    },
    backend: {
      description: 'Flask connects the web interface with the AI models. Main responsibilities include managing application routes, receiving image/video input, processing requests, running AI inference, returning prediction results, and handling real-time detection streaming.',
      processing: [
        'Static image upload',
        'Batch image processing',
        'Real-time camera frame processing'
      ]
    },
    frontend: {
      technologies: ['HTML', 'CSS', 'Vanilla JavaScript'],
      considerations: [
        'Responsive Web Design',
        'Desktop and mobile compatibility',
        'Modular navigation',
        'Dark Mode support',
        'Clear user instructions'
      ],
      description: 'The interface was designed for researchers who may use the application in laboratory and field environments.',
      images: [
        { src: '/assets/projects/super-soybean/about-deploy-web-dark.png', alt: 'Super Soybean About Interface' },
        { src: '/assets/projects/super-soybean/klasifikasi-deploy-web-dark.png', alt: 'Super Soybean Classification Interface' },
        { src: '/assets/projects/super-soybean/prediksi-deploy-web-dark.png', alt: 'Super Soybean Chlorophyll Prediction Interface' }
      ]
    },
    workflow: {
      image: {
        src: '/assets/projects/super-soybean/Workflow.png',
        alt: 'Super Soybean Application Workflow'
      },
      flow: [
        'Open Application',
        'Dashboard',
        'Select Feature',
        'Seed Counting',
        'Select Detection Mode (Upload Image or Real-time Camera)',
        'Flask Processing',
        'YOLO26 Inference',
        'Bounding Box + Count',
        'Display Result'
      ]
    },
    challenges: [
      {
        challenge: 'Deep-learning integration into real-time web processing can introduce latency and memory issues.',
        solution: 'Efficient Flask streaming logic and a lightweight YOLO architecture were used to maintain fast inference.',
        title: 'Real-time Deep Learning Integration'
      },
      {
        challenge: 'Seeds are small and may appear close together.',
        solution: 'Dataset augmentation and optimized detection parameters were used to improve object separation.',
        title: 'Detecting Small and Overlapping Seeds'
      },
      {
        challenge: 'Several AI modules were developed by different team members.',
        solution: 'A modular dashboard structure with consistent navigation and UX was created.',
        title: 'Multi-feature Application Design'
      }
    ],
    outcome: [
      'The final application provides:',
      '- AI-based soybean seed detection',
      '- Multi-feature agricultural analysis',
      '- Responsive web interface',
      '- Flask-based backend integration',
      '- Real-time Computer Vision capability'
    ],
    learnings: [
      {
        title: 'AI Product Development',
        description: 'Transforming an AI model into a complete user-facing application.'
      },
      {
        title: 'Model Deployment',
        description: 'Integrating Computer Vision models with backend services and real-time applications.'
      },
      {
        title: 'Full-stack Collaboration',
        description: 'Understanding how AI, frontend, and backend components interact inside a production-oriented system.'
      },
      {
        title: 'Engineering Decision Making',
        description: 'Balancing model accuracy, inference speed, usability, and system performance.'
      }
    ],
    credits: 'The project was developed collaboratively as a Smart Agriculture project focused on applying Artificial Intelligence and Computer Vision to soybean research.'
  }
};
