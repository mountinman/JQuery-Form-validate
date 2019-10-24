$(function() {
  var formValidations = {
    required: {
      validation: function(value) {
        return value !== "";
      },
      error: "Obavezno polje."
    },
    email: {
      validation: function(value) {
        return value.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      },
      error: "Neispravna e-mail adresa."
    }
  };
  function validation() {
    let $form = $("#form");
    let $inputs = $form.find("input, textarea");

    $form.on("submit", function(e) {
      e.preventDefault();
      $form
        .find(".err-message")
        .remove()
        .end()
        .find(".error")
        .removeClass("error");

      var errorCounter = 0;

      $inputs.each(function() {
        let $this = $(this);
        (rule = $this.data("validate") ? $this.data("validate") : ""),
          ($parent = $this.parent(".form-container__form--el"));
        if (!formValidations[rule].validation($this.val())) {
          errorCounter += 1;

          $parent
            .addClass("error")
            .append(
              "<div class='err-message'>" +
                formValidations[rule].error +
                "</div>"
            );
        }
      });
      if (errorCounter) {
        return;
      }

      $.post($form.attr("action"), $form.serialize(), function(data) {
        $.ajax({
          type: "post",
          url: "http://www.locastic.com/api/v1/fe-dev",
          async: true,
          cache: false,
          data: data,
          contentType: text/html,
          processData: true,
          success: function(response) {
            document.getElementById("output").innerHTML = "sent";
            alert(response);
          },
          error: function (e) {
 
            document.getElementById("output").innerHTML(e.responseText);
            console.log("ERROR : ", e);

        }
        });
        
      });
    });
  }
  validation();
});
