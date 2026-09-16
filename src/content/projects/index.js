import { superSoybean } from './super-soybean';
import { grahaRaya } from './graha-raya';
import { sibuku } from './sibuku';
import { brofin } from './brofin';
import { bikeSharing } from './bike-sharing';
import { etomac } from './etomac';

// Canonical project ordered array
export const projects = [
  superSoybean,
  grahaRaya,
  sibuku,
  etomac,
  brofin,
  bikeSharing
];

export const featuredProjects = projects.filter(project => project.featured);

export const secondaryProjects = projects.filter(project => !project.featured);

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug) || null;
}
