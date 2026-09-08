export const superSoybean = {
  name: 'Super Soybean',
  shortName: 'Super Soybean',
  slug: 'super-soybean',
  route: '/projects/super-soybean',
  category: 'AI / Computer Vision / Smart Agriculture',
  projectType: 'Product-based Research Project',
  role: 'AI Engineer, UI/UX Designer, Backend Developer',
  teamSize: '4 members',
  timeline: 'September 2025 — December 2025',
  duration: '3 months',
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
    ai: ['YOLO26', 'PyTorch', 'Ultralytics', 'Computer Vision'],
    backend: ['Python', 'Flask', 'OpenCV'],
    frontend: ['HTML', 'CSS', 'JavaScript'],
    environment: ['Google Colab', 'GPU Training Environment']
  },
  assetDirectory: '/assets/projects/super-soybean/',
  links: {
    repository: null,
    liveDemo: null,
    publication: null
  }
};
