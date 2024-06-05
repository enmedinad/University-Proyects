var height = screen.height;
var widths = screen.width;
if (height == 1080 && widths == 1920) {
} else {
  console.log(
    "Porfavor navege usando 1920x1080 para una mejor experiencia resoluciones disponibles(1920, 1024, 768, 475, 375 ,320) gracias."
  );
}

$("#navegar-down").click(function () {
  window.scroll({
    top: 900,
    behavior: "smooth",
  });
  var width = screen.availWidth;
  if (width <= 425) {
    window.scroll({
      top: 800,
      behavior: "smooth",
    });
  } else if (width <= 768 && width > 426) {
    window.scroll({
      top: 800,
      behavior: "smooth",
    });
  } else if (width <= 1024 && width > 769) {
    window.scroll({
      top: 800,
      behavior: "smooth",
    });
  }
});

$(".navbar-toggler").click(function () {
  var width = screen.availWidth;
  if ($("#navbarTogglerDemo03").hasClass("collapsing")) {
    if (width <= 991 && width > 769) {
      $("#video").addClass("expand-lg");
    } else if (width <= 768 && width > 426) {
      $("#video").addClass("expand-md");
    } else if (width <= 425 && width > 376) {
      $("#video").addClass("expand-mobile");
    } else if (width <= 375 && width > 321) {
      $("#video").addClass("expand-mobile-m");
    } else if (width <= 320) {
      $("#video").addClass("expand-mobile-sm");
    }
  }
});
$(".navbar-toggler").click(function () {
  var attr = $("#toggler-nav").attr("aria-expanded");
  console.log(attr);
  if (attr == "false") {
    var width = screen.availWidth;
    if (width <= 1024 && width > 769) {
      $("#video").removeClass("expand-lg");
    } else if (width <= 768 && width > 426) {
      $("#video").removeClass("expand-md");
    } else if (width <= 425 && width > 376) {
      $("#video").removeClass("expand-mobile");
    } else if (width <= 375 && width > 321) {
      $("#video").removeClass("expand-mobile-m");
    } else if (width <= 320) {
      $("#video").removeClass("expand-mobile-sm");
    }
  }
});

/* Store Buttons. */
$("#add-1").mouseover(function () {
  $("#add-1").click(function () {
    $("#add-1").addClass("clicked");
    $("#add-1").html("Objeto añadido!");
    $("#add-1").attr("data", "added");
  });
  var klik = $("#add-1").hasClass("clicked");
  console.log(klik);
  if (klik == true) {
    $("#add-1").click(function () {
      $("#add-1").removeClass("clicked");
      $("#add-1").html("Agregar al Carro");
      $("#add-1").attr("data", "removed");
    });
    $("#add-1").html("Eliminar Elemento");
    $("#add-1").mouseleave(function () {
      if ($("#add-1").attr("data") == "added") {
        $("#add-1").html("Objeto añadido!");
      }
    });
  }
});

$("#add-2").mouseover(function () {
  $("#add-2").click(function () {
    $("#add-2").addClass("clicked");
    $("#add-2").html("Objeto añadido!");
    $("#add-2").attr("data", "added");
  });
  var klik = $("#add-2").hasClass("clicked");
  console.log(klik);
  if (klik == true) {
    $("#add-2").click(function () {
      $("#add-2").removeClass("clicked");
      $("#add-2").html("Agregar al Carro");
      $("#add-2").attr("data", "removed");
    });
    $("#add-2").html("Eliminar Elemento");
    $("#add-2").mouseleave(function () {
      if ($("#add-2").attr("data") == "added") {
        $("#add-2").html("Objeto añadido!");
      }
    });
  }
});

$("#add-3").mouseover(function () {
  $("#add-3").click(function () {
    $("#add-3").addClass("clicked");
    $("#add-3").html("Objeto añadido!");
    $("#add-3").attr("data", "added");
  });
  var klik = $("#add-3").hasClass("clicked");
  console.log(klik);
  if (klik == true) {
    $("#add-3").click(function () {
      $("#add-3").removeClass("clicked");
      $("#add-3").html("Agregar al Carro");
      $("#add-3").attr("data", "removed");
    });
    $("#add-3").html("Eliminar Elemento");
    $("#add-3").mouseleave(function () {
      if ($("#add-3").attr("data") == "added") {
        $("#add-3").html("Objeto añadido!");
      }
    });
  }
});

$("#close-element-1").click(function () {
  $("#item-cart-1").attr("aria-disabled", "true");
  $("#item-cart-1").addClass("d-none");
  $("#price-item-1").attr("aria-value", 0);
});

if ($("#item-cart-1").attr("aria-disabled") == false) {
  $("#item-cart-1").removeClass("d-none");
}
if ($("#item-cart-1").attr("aria-disabled") == true) {
  $("#item-cart-1").addClass("d-none");
}

$("#close-element-2").click(function () {
  $("#item-cart-2").attr("aria-disabled", "true");
  $("#item-cart-2").addClass("d-none");
  $("#price-item-2").attr("aria-value", 0);
});

if ($("#item-cart-2").attr("aria-disabled") == false) {
  $("#item-cart-2").removeClass("d-none");
}
if ($("#item-cart-2").attr("aria-disabled") == true) {
  $("#item-cart-2").addClass("d-none");
}

$("#close-element-3").click(function () {
  $("#item-cart-3").attr("aria-disabled", "true");
  $("#item-cart-3").addClass("d-none");
  $("#price-item-3").attr("aria-value", 0);
});

if ($("#item-cart-3").attr("aria-disabled") == false) {
    $("#item-cart-3").removeClass("d-none");
  }
  if ($("#item-cart-3").attr("aria-disabled") == true) {
    $("#item-cart-3").addClass("d-none");
}
if (window.location.pathname === '/tarea-2/paginas/cart.html') {
  var price_1 = $("#qty-item-1").val() * parseInt($("#price-item-1").html() * 1000);
  document.getElementById("subtotal-item-1").innerHTML = "$" + price_1;
  var price_2 = $("#qty-item-2").val() * parseInt($("#price-item-2").html() * 1000);
  document.getElementById("subtotal-item-2").innerHTML = "$" + price_2;
  var price_3 = $("#qty-item-3").val() * parseInt($("#price-item-3").html() * 1000);
  document.getElementById("subtotal-item-3").innerHTML = "$" + price_3;

  var total = price_1 + price_2 + price_3;
  $("#subtotal").val("$"+total);
  $("#total").val("$"+total);
}
$("#refresh").click(function (){
  var price_1 = $("#qty-item-1").val() * parseInt($("#price-item-1").html() * 1000);
  document.getElementById("subtotal-item-1").innerHTML = "$" + price_1;
  var price_2 = $("#qty-item-2").val() * parseInt($("#price-item-2").html() * 1000);
  document.getElementById("subtotal-item-2").innerHTML = "$" + price_2;
  var price_3 = $("#qty-item-3").val() * parseInt($("#price-item-3").html() * 1000);
  document.getElementById("subtotal-item-3").innerHTML = "$" + price_3;

  var total = price_1 + price_2 + price_3;
  $("#subtotal").val("$"+total);
  $("#total").val("$"+total);
});
