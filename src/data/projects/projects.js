const getProject = projectID => {
  const { project } = require(`src/data/projects/project/${projectID}`);
  return project;
};

export const projects = [
  getProject('spotify-sampler'),
  getProject('social-ja'),
  getProject('team-sunergy'),
  getProject('caption-my-image'),
  getProject('last-quest')
];
