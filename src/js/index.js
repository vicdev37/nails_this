import module from "./module";
import jquery from "jquery";
window.$ = window.jQuery = jquery;
import Swal from "sweetalert2";


$(() => {
  //форма пробного начало
  $('.header_btn').on('click', () => {
    $('.freeprice').addClass('freeprice_active');
  });

  $('.close-price_form ').on('click', () => {
    $('.freeprice').removeClass('freeprice_active');
  })
  //форма пробного конец

  //отправка беплатного начало
  $('#form').on('submit', function (event) {
    event.preventDefault()
    let name = $('#name').val().trim();
    let phone = $('#phone').val().trim();
    const createHtmlForEmail2 = () => {
      return `<div>
      <div>
        name: <b>${name}</b>
      </div>
      <div>
        phone: <b>${phone}</b>
      </div>
      </div>`
    }

    const letterData = {
      to: 'goncharovfigma@gmail.com',
      subject: 'Форма "Попробовать бесплатно"',
      text: 'yo',
      html: createHtmlForEmail2()
    }


    $.ajax({
      url: 'https://api.42.works/mailer',
      type: 'POST',
      cache: false,
      data: JSON.stringify(letterData),
      beforeSend: function () {
        $('#sendForm').prop("disabled", true)
      },
      success: function (data) {
        if (!data) {
          alert('Произошла ошибка')
        } else {
          $('#form').trigger("reset")
        }
        $('#sendForm').prop("disabled", false)
      },
      contentType: "application/json; charset=utf-8",
    });
  });
  //отправка бесплатного конец 
  //форма подписки начало
  $('.price_btn').on('click', () => {
    $('.subscribe').addClass('subscribe_active');
  });

  $('.close-price_form ').on('click', () => {
    $('.subscribe').removeClass('subscribe_active');
  })
  //форма подписки конец

  //отправка подписки начало
  $('#form2').on('submit', function (event) {
    console.log('gg');
    event.preventDefault()
    let name2 = $('#name2').val().trim();
    let phone2 = $('#phone2').val().trim();
    const createHtmlForEmail2 = () => {
      return `<div>
      <div>
        name: <b>${name2}</b>
      </div>
      <div>
        phone: <b>${phone2}</b>
      </div>
      </div>`
    }

    // if (name2 == '') {
    //   $('#errorMassage').text("Введите имя")
    //   return false;
    // } else if (contact2 == '') {
    //   $('#errorMassage').text("Введите контактные данные")
    //   return false;
    // }
    // $('#errorMassage').text('')

    const letterData = {
      to: 'goncharovfigma@gmail.com',
      subject: 'Форма "Подписаться"',
      text: 'yo',
      html: createHtmlForEmail2()
    }


    $.ajax({
      url: 'https://api.42.works/mailer',
      type: 'POST',
      cache: false,
      data: JSON.stringify(letterData),
      beforeSend: function () {
        $('#sendForm').prop("disabled", true)
      },
      success: function (data) {
        if (!data) {
          alert('Произошла ошибка')
        } else {
          $('#form2').trigger("reset")
        }
        $('#sendForm').prop("disabled", false)
      },
      contentType: "application/json; charset=utf-8",
    });
  });
  //отправка подписки конец 

  //подключения кнопок "попробовать бесплатно" начало
  $('.header_section-btn').on('click', () => {
    $('.freeprice').addClass('freeprice_active');
  });

  $('.close-price_form ').on('click', () => {
    $('.freeprice').removeClass('freeprice_active');
  })

  $('.price-btn').on('click', () => {
    $('.freeprice').addClass('freeprice_active');
  });

  $('.close-price_form ').on('click', () => {
    $('.freeprice').removeClass('freeprice_active');
  })

  //подключения кнопок конец 
})

