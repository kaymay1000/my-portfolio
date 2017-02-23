'use strict';

(function(module){

  function Project(obj) {
    this.title = obj.title;
    this.fileSource = obj.fileSource;
    this.img = obj.img;
    this.imgId = obj.imgId;
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

  Project.fetchAll = function(callback) {
    if (localStorage.jsonProjects) {
      Project.loadAll(JSON.parse(localStorage.jsonProjects));
      // projectView.appendProject();
      console.log('fetched from localStorage');
      if (callback) callback(); //if a callback function is passed in to fetchAll, which accepts a callback, but doesn't *need* one to run, then call it.
    } else {
      let $jsonProjects = $.getJSON('../../data/projects.json', function(data) {
        localStorage.setItem('jsonProjects', JSON.stringify(data)); //set stringified JSON in localStorage to prevent need for server call next time
        Project.loadAll(data);
        // projectView.appendProject();
        console.log('fetched from JSON');
        if (callback) callback();
      });
    }
  }

  Project.byDifficulty = function() {
    var projectsByDiff = [];
    Project.all.map(function(currProject) {
      if (currProject.difficulty === 'advanced') {
        projectsByDiff.push(currProject);
        console.log(projectsByDiff);
      }
    });
    Project.all.map(function(currProject) {
      if (currProject.difficulty === 'intermediate') {
        projectsByDiff.push(currProject);
      }
    });
    Project.all.map(function(currProject) {
      if (currProject.difficulty === 'easy') {
        projectsByDiff.push(currProject);
      }
    });
    console.log(projectsByDiff, 'Projects by diff array');
    return projectsByDiff;
  }

  module.Project = Project;
})(window);
