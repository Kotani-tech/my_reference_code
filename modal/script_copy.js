$(function () {
  //モーダルの表示・非表示
  // ユーザー名
  $("#user_show").on("click", function () {
    let user = $("#user_name").text();
    $("#user").val(user);
    $("#user_modal").fadeIn();
  });
  $("#close_modal_user").on("click", function () {
    $("#user_modal").fadeOut();
  });

  //メールアドレス
  $("#mail_show").on("click", function () {
    let mail = $("#mail_address").text();
    $("#mail").val(mail);
    $("#mail_modal").fadeIn();
  });
  $("#close_modal_mail").on("click", function () {
    $("#mail_modal").fadeOut();
  });

  //「送信」ボタンを押したときにアラームを表示するイベント。
  $(".btn").on("click", function () {
    window.alert("を変更しました。");

    //本旨から外れますが、「送信」ボタンの色をマウスを乗せたり外すと変えるイベント
    $(".btn")
      .on("mouseenter", function () {
        $(this).css("background-color", "#873955");
      })
      .on("mouseleave", function () {
        $(this).css("background-color", "#0074bf");
      });
  });
});
