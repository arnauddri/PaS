$(document).ready(function () {
  $('.rent h2').hover(function () {
    $('#rent').addClass('rent--center')
    $('#lend').removeClass('lend--center')
  })
  $('.lend h2').hover(function () {
    $('#lend').addClass('lend--center')
    $('#rent').removeClass('rent--center')
  })
  $('#landing').mouseleave(function () {
    $('#lend').removeClass('lend--center')
    $('#rent').removeClass('rent--center')
  })
  $('.fa-times-circle-o').click(function () {
    $('#lend').removeClass('lend--center')
    $('#rent').removeClass('rent--center')
  })
})
