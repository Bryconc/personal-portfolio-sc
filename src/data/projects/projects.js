const getProject = projectID => {
  const { project } = require(`src/data/projects/project/${projectID}`);
  return project;
};

export const projects = [
  getProject('spotify-sampler'),
  getProject('last-quest'),
  getProject('caption-my-image'),
  getProject('team-sunergy'),
  getProject('social-ja')
];
