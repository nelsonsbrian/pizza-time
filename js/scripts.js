// business logic
var pizzas = [];


var printReceipt = function() {
  pizzas.forEach(function(pizza) {
    $('#result').append(
      "Pizza Size: " + pizza.pSize +
      "<br>Pizza Crust: " + pizza.pCrust +
      "<br>Pizza Sauce: " +pizza. pSauce +
      "<br>Pizza Cheese: " + pizza.pCheese +
      "<br>Pizza Meat: " + pizza.pMeat +
      "<br>Pizza Premium Topping: " + pizza.pPremTopping +
      "<br>Pizza Topping: " + pizza.pTopping
      )
  });
}




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
    alert(pSize + pCrust + pSauce + pCheese + pMeat + pPremTopping + pTopping);
    var newPizza = new Pizza(pSize, pCrust, pSauce, pCheese, pMeat, pPremTopping, pTopping);
    pizzas.push(newPizza);

    printReceipt();
  });
});
