'use strict';
(function(module){

  var projectView = {};

  projectView.handleMainNav = function() {
    $('#mainNav').on('click', '.tab', function() {
      $('.tabContent').hide();
      $('#' + $(this).data('content')).fadeIn(500);
    });
    $('#mainNav .tab:first').click(); //simulate click on Home tab
  }

  // projectView.appendProject = function() {
  //   Project.all.forEach(function(currProject) {
  //     $('#projects').append(currProject.toHtml());
  //   });
  // }

  projectView.handleDiffFilter = function() {
    $('#diffFilter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        // $('article[data-difficulty="' + $(this).val() + '"]').fadeIn(500);
        $(`article[data-difficulty=${$(this).val()}]`).fadeIn(500);
      } else {
        $('article').fadeIn(500);
      }
    });
  }

  projectView.renderProjects = function() {
    var projectsByDifficulty = Project.byDifficulty();
    console.log(projectsByDifficulty, 'projects by difficulty');
    projectsByDifficulty.forEach(function(p) {
      if ($(`#diffFilter option:contains(${p.difficulty})`).length === 0) {
        $('#projects').append(p.toHtml());
      }
    });
  }

  projectView.handleMainNav();
  projectView.handleDiffFilter();
  Project.fetchAll(projectView.renderProjects);

  module.projectView = projectView;
})(window);
