// business logic
var pizzas = [];
var pizzaId = 0;

var printReceipt = function(id) { //gives a detailed showing of what components are in the pizza
  var price = pizzas[id].price();
  $('#price').empty();
  $('#price').append(
    "<div class='pizzaList'>" +
    "<span class='subHead'>Pizza Details:</span>" +
    "<br>Size: " + pizzas[id].pSize +
    "<br>Crust: " + pizzas[id].pCrust +
    "<br>Pizza Sauce: " + pizzas[id].pSauce +
    "<br>Cheese[Y/N]: " + pizzas[id].pCheese +
    "<br><span class='subHead'>Toppings:</span>" +
    "<br>Pizza Meat: " + pizzas[id].pMeat +
    "<br>Pizza Premium Topping: " + pizzas[id].pPremTopping +
    "<br>Pizza Topping: " + pizzas[id].pTopping +
    "</div>"
  );
}

var showTotal = function() { //adds all of the prices for every pizza in pizzas[]
  var price = 0;
  pizzas.forEach(function(pizza) {
    price += pizza.price();
  });
  $('#total').empty();
  $('#total').append(
    "Subtotal: $" + price.toFixed(2) +
    "<br>Tax: $" + price.tax() +
    "<br>Total: $" + price.totalPrice(price.tax())
  );
}

var toppingCount = function(pizza) {//counts number of toppings and premium toppings on a pizza
  return pizza.length;
}

var meatsCount = function(meat) {// counts number of meats on a pizza
  return meat.length;
}

Number.prototype.tax = function() {// computes tax from the subtotal of price()
  return parseFloat((this * .095).toFixed(2));
};

Number.prototype.totalPrice = function(tax) {// computer the total using the tax prototype
  return  parseFloat((this + tax).toFixed(2));
};


// user logic
$(document).ready(function() {
  //add to cart button - takes form fields and creats a new pizza and adds to array. Uses Pizza contructor on pizza/js.js
  $('button#buyPizza').click(function() {
    var pSize = $("input[name=pSize]:radio:checked").val();
    var pCrust = $("input[name=pCrust]:radio:checked").val();
    var pSauce = $("input[name=pSauce]:radio:checked").val();
    var pCheese = $("input[name=pCheese]:radio:checked").val();
    pMeat = [];
    pPremTopping = [];
    pTopping = [];
    $("input:checkbox[name=pMeat]:checked").each(function() {pMeat.push($(this).val())});
    $("input:checkbox[name=pPremTopping]:checked").each(function() {pPremTopping.push($(this).val())});
    $("input:checkbox[name=pTopping]:checked").each(function() {pTopping.push($(this).val())});
    var newPizza = new Pizza(pizzaId, pSize, pCrust, pSauce, pCheese, pMeat, pPremTopping, pTopping);
    pizzas.push(newPizza);
    var toppings = toppingCount(pPremTopping.concat(pTopping));
    var meats = meatsCount(pMeat);
    $('.orders').append("<li id=" + pizzaId + ">" + (pizzaId + 1) + ". " + pSize + " " + pSauce + "  pizza: $" + newPizza.price().toFixed(2) + " - meat[" + meats + "]" + " - topp[" + toppings + "]</li>");
    pizzaId++;
    $('#orderList').show();
    $('#orderRecap').show();
    showTotal();
  });

  $('button#deliveryBut').click(function() {// shows the name/address form to fill out for delivery
    $('.deliveryForm').show();
  });

  $('form#deliveryForm').submit(function(event) {// submits the delivery form.
    event.preventDefault();
    $('.submitResponse').text("Thanks " + $('#name').val() + ", Your pizza will be delivered to " +  $('#address').val() + " in under 40 minutes!")
    $('.deliveryForm').hide();
    $('#name').val('');
    $('#address').val('');
  });

});

$(document).on('click', '.orders > li' , function() {
  printReceipt($(this).attr('id'));
});
