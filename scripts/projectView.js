'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  $('#mainNav').on('click', '.tab', function() {
    $('.tabContent').hide();
    $('#' + $(this).data('content')).fadeIn(500);
  });
  $('#mainNav .tab:first').click(); //simulate click on Home tab
}

projectView.handleMainNav();
