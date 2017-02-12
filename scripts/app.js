var projects = [];

function Project(opts) {
  this.title = opts.title;
  this.fileSource = opts.fileSource;
  this.img = opts.img;
  this.dateCreated = opts.dateCreated;
  this.difficulty = opts.difficulty;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('#title').text(this.title);
  $newProject.attr('href', this.fileSource);
  $newProject.attr('src', this.img);
  $newProject.find('#dateCreated').text(this.dateCreated);
  $newProject.find('#difficulty').text(this.difficulty);
  return $newProject;
}

rawData.forEach(function(p) {
  projects.push(new Project(p));
});

projects.forEach(function(currProject) {
  $('#projects').append(currProject.toHtml());
});
