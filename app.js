var projects = [];

function Project(title, dateCreated, difficulty, fileSource) {
  this.title = title;
  this.dateCreated = dateCreated;
  this.difficulty = difficulty;
  this.fileSource = fileSource;
  projects.push(this);
}
