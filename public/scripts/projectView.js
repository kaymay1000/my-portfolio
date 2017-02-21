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

projectView.handleMainNav();

module.projectView = projectView;
})(window);
