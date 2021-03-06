import module from "./module";
import jquery from "jquery";
window.$ = window.jQuery = jquery;
import Swal from "sweetalert2";
// import mask from "jquery-mask-plugin";

$(() => {
  // $("#phone").mask("+7-000-000-00-00");
  // $("#phone2").mask("+7-000-000-00-00");

  //форма пробного начало
  $(".header_btn, .header_section-btn, .price_btn").on("click", () => {
    $(".freeprice").addClass("freeprice_active");
  });

  $(".subscribe_btn").on("click", () => {
    $(".subscribe").addClass("subscribe_active");
  });

  $(".close-price_form ").on("click", () => {
    $(".freeprice").removeClass("freeprice_active");
    $(".subscribe").removeClass("subscribe_active");
  });

  $(document).on("click", (e) => {
    let click = $(e.target);
    let outsideDiv = $(".freeprice-wrapper").parents();
    let outsideDiv2 = $(".subscribe-wrapper").parents();
    if (click.is(outsideDiv)) {
      $(".freeprice").removeClass("freeprice_active");
    }
    if (click.is(outsideDiv2)) {
      $(".subscribe").removeClass("subscribe_active");
    }
  });

  //отправка беплатного начало
  $("#form").on("submit", function (event) {
    event.preventDefault();
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    const createHtmlForEmail2 = () => {
      return `<div>
      <div>
        name: <b>${name}</b>
      </div>
      <div>
        phone: <b>${phone}</b>
      </div>
      </div>`;
    };
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Форма отправлена, мы свяжемся с Вами",
      showConfirmButton: false,
      timer: 1500,
    });

    const letterData = {
      to: "yuliabeymlina@gmail.com",
      subject: 'Форма "Попробовать бесплатно"',
      text: "yo",
      html: createHtmlForEmail2(),
    };

    $.ajax({
      url: "https://api.42.works/mailer",
      type: "POST",
      cache: false,
      data: JSON.stringify(letterData),
      beforeSend: function () {
        $("#sendForm").prop("disabled", true);
      },
      success: function (data) {
        if (!data) {
          alert("Произошла ошибка");
        } else {
          $("#form").trigger("reset");
        }
        $("#sendForm").prop("disabled", false);
      },
      contentType: "application/json; charset=utf-8",
    });
  });

  //форма подписки конец

  //отправка подписки начало
  $("#form2").on("submit", function (event) {
    console.log("gg");
    event.preventDefault();
    let name2 = $("#name2").val().trim();
    let phone2 = $("#phone2").val().trim();
    const createHtmlForEmail2 = () => {
      return `<div>
      <div>
        name: <b>${name2}</b>
      </div>
      <div>
        phone: <b>${phone2}</b>
      </div>
      </div>`;
    };

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Форма отправлена, мы свяжемся с Вами",
      showConfirmButton: false,
      timer: 2500,
    });

    const letterData = {
      to: "yuliabeymlina@gmail.com",
      subject: 'Форма "Подписаться"',
      text: "yo",
      html: createHtmlForEmail2(),
    };

    $.ajax({
      url: "https://api.42.works/mailer",
      type: "POST",
      cache: false,
      data: JSON.stringify(letterData),
      beforeSend: function () {
        $("#sendForm").prop("disabled", true);
      },
      success: function (data) {
        if (!data) {
          alert("Произошла ошибка");
        } else {
          $("#form2").trigger("reset");
        }
        $("#sendForm").prop("disabled", false);
      },
      contentType: "application/json; charset=utf-8",
    });
  });
  //отправка подписки конец

  //подключения кнопок "попробовать бесплатно" начало
});
