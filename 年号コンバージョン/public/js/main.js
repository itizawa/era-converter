(function(){
  'use strict'

  var i=0;
  // var target=2000;
  var tweetUrl;
  var date =[];

  $('.box').hide();

  function init(){

    i=0;
    $('.box').fadeOut();
    $('#show_result p').html('Conversion!!');
    if ($('li').length > 5) {
      for (var e = 0; e < 3; e++) {
        $('li:last').remove();
      };
    }


  };

  // twitter
  function twitter_link(){

    for (var y = 1; y < 9; y++) {
      var nengo = $('li:nth-of-type('+ y +') h2').text();

      tweetUrl = 'https://twitter.com/intent/tweet?text=' +
      encodeURIComponent(
      '私は' + nengo + ' 　https://conversion-e6b5e.firebaseapp.com/') + '&hashtags=年号コンバーター';

      $('li:nth-of-type(' + y + ') a').attr('href',tweetUrl);
    }
  }

  $('.twitter').click(function(){

    var select_id = ($(this).data("id"));
    console.log($('#' + select_id + '.result').text());




    tweetUrl = 'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent(
    '私は') + '&hashtags=元号コンバーター';

    $('this').attr('href',tweetUrl);

    // return false

  });





  // 初期化
  init();

  // 年号データの整形
  function adjust_age(target){
    return target.split('-');
  }

  function set_age(){
    $('#N').html(cal(2019));
    $('#H').html(cal(1989));
    $('#S').html(cal(1926));
    $('#T').html(cal(1912));
    $('#M').html(cal(1868));

    for (var i = 0; i < 3; i++) {
      var random = Math.floor( Math.random() * json.length );
      add_rundom(random);
    }

  };

  function show_result(target){
    date = adjust_age(target);
    console.log(date);

    // 正しくない日付は戻す ex 2/30
    if(date[0] == ""){
      alert('正しい日付を入力してください')
      return
    }
    set_age();
    twitter_link();
    $('li').slideDown();
    $('#show_result p').html('Return');
    i = 1;
  }

  function cal(age){
    if (date[0] > age){
      return date[0]-age+1;
    }
    if (date[0] == age){
      if (date[0] == 2019){
        if(date[1] < 5){
          return '0 '
        }
      }
      return '元 '
    }
    return date[0]-age;
  };

  $('#show_result').click(()=>{
    // 戻るボタンだったら初期化して戻る
    if (i == 1){
      init();
      return
    }
    var target = $('.target').val()

    show_result(target);

  });



  function add_rundom(i){
    console.log(json[i].age);

    var data = '<h2>'
    + json[i].age
    + ' <span class="result">'
    + cal(json[i].ad)
    + '</span>'
    + ' 年生まれです!'
    + '</h2>'
    + '<p>　'
    + json[i].name
    + 'の時代です！<br>　改元理由：'
    + json[i].because
    + '</p>'
    + '<a href="#" class="twitter" target="_blank">Tweet!</a>';


    // json[i].age
    $('ul').append('<li class="box"></li>');
    $('li:last-child').append(data);

    $('json[i].age').html(cal('json[i].ad'));
  }



})();
