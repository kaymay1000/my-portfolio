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
  // Pre-Handlebars templating method (when article element had a class of '.template'):
  // var $newProject = $('article.template').clone();
  // $newProject.removeClass('template');
  // $newProject.find('#title').text(this.title);
  // $newProject.find('a').attr('href', this.fileSource);
  // $newProject.find('img').attr('src', this.img);
  // $newProject.find('#dateCreated').text(this.dateCreated);
  // $newProject.find('#difficulty').text(this.difficulty);
  // return $newProject;

  var htmlTemp = $('#handlebarsTemplate').text();
  var compiledTemp = Handlebars.compile(htmlTemp); //Handlebars.compile() returns a function, so we're able to pass it an argument (this) in the next line.
  return compiledTemp(this);
}

rawData.forEach(function(p) {
  projects.push(new Project(p));
});

projects.forEach(function(currProject) {
  $('#projects').append(currProject.toHtml());
});
