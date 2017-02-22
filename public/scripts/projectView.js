'use strict';
(function(module){

  const projectView = {};

  projectView.handleMainNav = function() {
    $('#mainNav').on('click', '.tab', function() {
      $('.tabContent').hide();
      $('#' + $(this).data('content')).fadeIn(500);
    });
    $('#mainNav .tab:first').click(); //simulate click on Home tab
  }

  projectView.appendProject = function() {
    Project.all.forEach(function(currProject) {
      $('#projects').append(currProject.toHtml());
    });
  }

  projectView.handleDiffFilter = function() {
    $('#diffFilter').on('change', function(){
      $('#projects').hide();
      var selected = $(this).val();
      console.log(selected);
      const filteredProjects = Project.all.filter(function(currProject) {
        if (currProject.difficulty === selected) {
          console.log('currProject', currProject)
          $('#projects').append(currProject);
        }
      });
    });
    $('#diffFilter').val('default');
  }

  projectView.handleMainNav();
  projectView.handleDiffFilter();
  module.projectView = projectView;
})(window);
