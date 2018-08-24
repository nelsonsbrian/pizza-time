// business logic
var pizzas = [];

var Pizza = function(pSize, pCrust, pSauce, pCheese, pMeat, pPremTopping, pTopping) {
  this.pSize = parseInt(pSize);
  this.pCrust = parseInt(pCrust);
  this.pSauce = parseInt(pSauce);
  this.pCheese = parseInt(pCheese);
  this.pMeat = pMeat;
  this.pPremTopping = pPremTopping;
  this.pTopping = pTopping;

}

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
    var pSize = $( "input[name=pSize]:radio").val();
    var pCrust = $( "input[name=pCrust]:radio").val();
    var pSauce = $( "input[name=pSauce]:radio").val();
    var pCheese = $( "input[name=pCheese]:radio").val();
    pMeat = [];
    pPremTopping = [];
    pTopping = [];
    $("input:checkbox[name=pMeat]:checked").each(function() {pMeat.push($(this).val())});
    $("input:checkbox[name=pPremTopping]:checked").each(function() {pPremTopping.push($(this).val())});
    $("input:checkbox[name=pTopping]:checked").each(function() {pTopping.push($(this).val())});

    var newPizza = new Pizza(pSize, pCrust, pSauce, pCheese, pMeat, pPremTopping, pTopping);
    pizzas.push(newPizza);

    printReceipt();
  });
});
