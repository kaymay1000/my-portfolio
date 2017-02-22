'use strict';

(function(module){

  function Project(obj) {
    this.title = obj.title;
    this.fileSource = obj.fileSource;
    this.img = obj.img;
    this.dateCreated = obj.dateCreated;
    this.difficulty = obj.difficulty;
  }

  Project.all = [];

  Project.prototype.toHtml = function() { //functions that are available to (and should apply to) individual Project instances
    var htmlTemp = $('#handlebarsTemplate').text();
    var compiledTemp = Handlebars.compile(htmlTemp); //Handlebars.compile() returns a function, so we're able to pass it an argument (this) in the next line.
    return compiledTemp(this);
  }

  Project.loadAll = function(rawData) {
    rawData.forEach(function(p) {
      console.log('making project');
      Project.all.push(new Project(p));
    });
  }

  Project.fetchAll = function() {
    if (localStorage.jsonProjects) {
      Project.loadAll(JSON.parse(localStorage.jsonProjects));
      projectView.appendProject();
      console.log('fetched from localStorage');
    } else {
      let $jsonProjects = $.getJSON('../data/projects.json', function(data) {
        localStorage.setItem('jsonProjects', JSON.stringify(data)); //set stringified JSON in localStorage to prevent need for server call next time
        Project.loadAll(data);
        projectView.appendProject();
        console.log('fetched from JSON');
      })
    }
  }

  module.Project = Project;
})(window);
