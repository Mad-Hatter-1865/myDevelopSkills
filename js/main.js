$('#addsk').on('click', function(evt) {
   let $newSkill = $('<tr><td>' + $('#entry').val() + '<button class="rbtn">Remove</button></td></tr>');
    $('#mainb').append($newSkill);
});

$('#skills #mainb').on('click','button',function() {
    $(this).closest('tr').remove();
});