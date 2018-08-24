// business logic
var pizzas = [];
var pizzaId = 0;

var printReceipt = function(id) {
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

var showTotal = function() {
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

Number.prototype.tax = function() {
  return parseFloat((this * .095).toFixed(2));
};

Number.prototype.totalPrice = function(tax) {
  return  parseFloat((this + tax).toFixed(2));
};


// user logic
$(document).ready(function() {
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
    $('.orders').append("<li id=" + pizzaId + ">" + pSize + " pizza: $" + newPizza.price().toFixed(2) + "</li>");
    pizzaId++;
    $('#orderList').show();
    $('#orderRecap').show();
    showTotal();
  });

  $('button#deliveryBut').click(function() {
    $('.deliveryForm').show();
  });

  $('form#deliveryForm').submit(function(event) {
    event.preventDefault();
    alert('works');
    $('#name').val('');
    $('#address').val('');
  });

});


$(document).on('click', '.orders > li' , function() {
  printReceipt($(this).attr('id'));
});
