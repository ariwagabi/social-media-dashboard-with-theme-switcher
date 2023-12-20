$(document).ready(function () {
  $("#toggler-box").click(function () {
    $('body').toggleClass('body-dark-bg');
    $('#dk-bg').toggleClass('topbg');
    $('[data-toggle-theme="white"]').toggle();
    $('[data-toggle-theme="dark"]').toggle();
    $('h1, h2, h3, h5').toggleClass('text-white');
    $('[data-social-list], [data-overview-list]').toggleClass('dark-bg-listbox');
    $('#toggler-container').toggleClass('toggle-bg-dark');
    $('.toggler').toggleClass('toggler-dark');
  });
});