$(function() {

  var answer;

  var eat;
  var bite;

  function eatBite(ans, num) {
    eat = 0;
    bite = 0;
    var d1 = ans%10;
    var d2 = ~~(ans/10)%10;
    var d3 = ~~(ans/100);
    var n1 = num%10;
    var n2 = ~~(num/10)%10;
    var n3 = ~~(num/100);
    if (n1 == d1) {
      eat++;
    } else if (n1 == d2 || n1 == d3) {
      bite ++;
    }
    if (n2 == d2) {
      eat++;
    } else if (n2 == d1 || n2 == d3) {
      bite ++;
    }
    if (n3 == d3) {
      eat++;
    } else if (n3 == d1 || n3 == d2) {
      bite ++;
    }
  }

  function create() {
    $('.first').removeClass('close');
    var number = Math.floor(100 + 899 * Math.random());
    answer = number;
    var d1 = answer%10;
    var d2 = ~~(answer/10)%10;
    var d3 = ~~(answer/100);
    console.log(answer);
    if (d1 == d2 || d1 == d3 || d2 == d3) {
      create();
    }
  }

  function checkNum(num) {
    var nd1 = num%10;
    var nd2 = ~~(num/10)%10;
    var nd3 = ~~(num/100);
    return nd1 == nd2 || nd1 == nd3 || nd2 == nd3;
  }

  function removeAndAdd(className) {
    $(className).removeClass('close');
    $(className).addClass('open');
  }

  function sortOut(className1, className2, className3) {
    $(className1).css('display','none');
    $(className2).css('display','none');
    $(className3).text($(className1).val());
  }

  function checkHasErrorClass() {
    return $('.error').hasClass('open') || $('.digit-error').hasClass('open') || $('.num-error').hasClass('open');
  }

  function closeClass(className1,className2,className3) {
    $(className1).addClass('close');
    $(className2).addClass('close');
    $(className3).addClass('close');
  }

  $('#create-number').click(function() {
    create();
  });

  $('#first-submit').click(function() {
    closeClass('.error','.digit-error','.num-error');
    if ($('#first-input').val() == "" || isNaN(Number($('#first-input').val()))) {
      removeAndAdd('.error');
    } else if(~~(Number($('#first-input').val())/100) <= 0 || ~~(Number($('#first-input').val())/100) >= 10) {
      removeAndAdd('.digit-error');
    } else if (checkNum(Number($('#first-input').val()))){
      removeAndAdd('.num-error');
    } else if(Number($('#first-input').val()) == answer) {
      sortOut('#first-input','#first-submit','#first-tmp-input');
      $('.correct').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    } else {
      sortOut('#first-input','#first-submit','#first-tmp-input');
      eatBite(answer,Number($('#first-input').val()));
      $('#eatbite1').text(eat + " eat " + bite + " bite ");
      $('.second').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    }
  });

  $('#second-submit').click(function() {
    closeClass('.error','.digit-error','.num-error');
    if ($('#second-input').val() == "" || isNaN(Number($('#second-input').val()))) {
      removeAndAdd('.error');
    } else if(~~(Number($('#second-input').val())/100) <= 0 || ~~(Number($('#second-input').val())/100) >= 10) {
      removeAndAdd('.digit-error');
    } else if (checkNum(Number($('#second-input').val()))){
      removeAndAdd('.num-error');
    } else if(Number($('#second-input').val()) == answer) {
      sortOut('#second-input','#second-submit','#second-tmp-input');
      $('.correct').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    } else {
      sortOut('#second-input','#second-submit','#second-tmp-input');
      eatBite(answer,Number($('#second-input').val()));
      $('#eatbite2').text(eat + " eat " + bite + " bite ");
      $('.third').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    }
  });

  $('#third-submit').click(function() {
    closeClass('.error','.digit-error','.num-error');
    if ($('#third-input').val() == "" || isNaN(Number($('#third-input').val()))) {
      removeAndAdd('.error');
    } else if(~~(Number($('#third-input').val())/100) <= 0 || ~~(Number($('#third-input').val())/100) >= 10) {
      removeAndAdd('.digit-error');
    } else if (checkNum(Number($('#third-input').val()))){
      removeAndAdd('.num-error');
    } else if(Number($('#third-input').val()) == answer) {
      sortOut('#third-input','#third-submit','#third-tmp-input');
      $('.correct').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    } else {
      sortOut('#third-input','#third-submit','#third-tmp-input');
      eatBite(answer,Number($('#third-input').val()));
      $('#eatbite3').text(eat + " eat " + bite + " bite ");
      $('.forth').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    }
  });

  $('#forth-submit').click(function() {
    closeClass('.error','.digit-error','.num-error');
    if ($('#forth-input').val() == "" || isNaN(Number($('#forth-input').val()))) {
      removeAndAdd('.error');
    } else if(~~(Number($('#forth-input').val())/100) <= 0 || ~~(Number($('#forth-input').val())/100) >= 10) {
      removeAndAdd('.digit-error');
    } else if (checkNum(Number($('#forth-input').val()))){
      removeAndAdd('.num-error');
    } else if(Number($('#forth-input').val()) == answer) {
      sortOut('#forth-input','#forth-submit','#forth-tmp-input');
      $('.correct').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    } else {
      sortOut('#forth-input','#forth-submit','#forth-tmp-input');
      eatBite(answer,Number($('#forth-input').val()));
      $('#eatbite4').text(eat + " eat " + bite + " bite ");
      $('.fifth').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    }
  });

  $('#fifth-submit').click(function() {
    closeClass('.error','.digit-error','.num-error');
    if ($('#fifth-input').val() == "" || isNaN(Number($('#fifth-input').val()))) {
      removeAndAdd('.error');
    } else if(~~(Number($('#fifth-input').val())/100) <= 0 || ~~(Number($('#fifth-input').val())/100) >= 10) {
      removeAndAdd('.digit-error');
    } else if (checkNum(Number($('#first-input').val()))){
      removeAndAdd('.num-error');
    } else if (Number($('#fifth-input').val()) == answer) {
      sortOut('#fifth-input','#fifth-submit','#fifth-tmp-input');
      $('.correct').removeClass('close');
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    } else {
      sortOut('#fifth-input','#fifth-submit','#fifth-tmp-input');
      eatBite(answer,Number($('#fifth-input').val()));
      $('#eatbite5').text(eat + " eat " + bite + " bite ");
      $('.false').removeClass('close');
      $('#answer').text("正解は" + answer +"です。");
      if (checkHasErrorClass()) {
        closeClass('.error','.digit-error','.num-error');
      }
    }
  });

  $('#reset-number').click(function() {
    location.reload();
  })
});