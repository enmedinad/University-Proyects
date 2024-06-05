
$('#space-ship div[id^="item-"]').click(function() {
  $('#space-ship div[id^="item-"].selected').removeClass('selected').removeAttr('style');
  $(this).addClass('selected');
  var borderColor = $(this).css('border-color');
  $(this).css('background-color', borderColor);
});

$('#space-ship div[id^="item-"]').click(function() {
  var seatNumber = $(this).attr('id').split('-')[1];
  var columnLetter = $(this).attr('class').split(' ')[0].replace('column-', '');
  var result = '(' + columnLetter + '-' + seatNumber + ')';
  console.log(result)
  $("#asientos-seleccionados-2").html('Asiento: ' + result);
  if (seatNumber >= 1 && seatNumber <= 14) {
    $('.continue').addClass('disabled');
  }else{
    $('.continue').removeClass('disabled');
  }
});
