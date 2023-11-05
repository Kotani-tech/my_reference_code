$(function() {
    //モーダルの表示・非表示
     $('#inquire_show').on('click', function(){
       $('#inquire_modal').fadeIn();
     });
     $('#close_modal').on('click', function(){
       $('#inquire_modal').fadeOut();
     });






























    //「送信」ボタンを押したときにアラームを表示するイベント。
     $('.btn').on('click',function(){
         window.alert("お問い合わせくださりありがとうございます！");
   
     //本旨から外れますが、「送信」ボタンの色をマウスを乗せたり外すと変えるイベント
     $('.btn').on('mouseenter', function(){
       $(this).css('background-color', '#873955');
     })
     .on('mouseleave', function(){
       $(this).css('background-color', '#0074bf');
     });
     });
   });