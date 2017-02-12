'use strict';

function Project(obj) {
  this.title = obj.title;
  this.fileSource = obj.fileSource;
  this.img = obj.img;
  this.dateCreated = obj.dateCreated;
  this.difficulty = obj.difficulty;
}

var projects = [];

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('#title').text(this.title);
  $newProject.find('a').attr('href', this.fileSource);
  $newProject.find('img').attr('src', this.img);
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
