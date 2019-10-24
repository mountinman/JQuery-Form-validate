var formValidations = {
    required: {
        validation: function (value) {
          return value !== '';
        },
        error: 'Obavezno polje.'
      },
      email: {
        validation: function (value) {
          return value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        },
        error: 'Neispravna e-mail adresa.'
      }
  }
  function valitation () {
      let $form = $('#form');
      let $inputs = $form.find('input, textarea');

      $form.on('submit', function (e) {
        e.preventDefault();
        $inputs.each(function () {
            let $this = $(this);
            rule = $this.data('validate') ? $this.data('validate') : '',
            $parent = $this.parent(".form-container__form--el");
        })
      })
  }