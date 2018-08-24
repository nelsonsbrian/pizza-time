

function Pizza(pSize, pCrust, pSauce, pCheese, pMeat, pPremTopping, pTopping) {
  this.pSize = pSize;
  this.pCrust = pCrust;
  this.pSauce = pSauce;
  this.pCheese = pCheese;
  this.pMeat = pMeat;
  this.pPremTopping = pPremTopping;
  this.pTopping = pTopping;

  this.sizePrice = {
    Personal: 4,
    Medium: 7,
    Large: 9,
    Family: 11
  }

  this.crustPrice = {
    Thin: 0,
    Regular: 1,
    DeepDish: 3
  }

  this.saucePrice = {
    Red: 0,
    White: .5,
    OilGarlic: 1.25
  }

  this.cheesePrice = {
    Cheese: 0,
    noCheese: -.5
  }

  this.meatPrice = {
    Pepperoni: .60,
    Sausage: .75,
    Chicken: 1.25,
    CandianBacon: .50
  }

  this.premToppingPrice = {
    Bacon: 1.00,
    Artichoke: .80,
    Anchovies: .90,
  }

  this.toppingPrice = {
    Olives: .25,
    Onion: .10,
    Spinach: .30,
    Tomato: .33,
    Jalepeno: .22,
  }

  this.price = function() {
    var price = 0;
    console.log(price);
    price += this.sizePrice[this.pSize];
    console.log(price);
    price += this.crustPrice[this.pCrust];
    console.log(price);
    price += this.saucePrice[this.pSauce];
    console.log(price);
    price += this.cheesePrice[this.pCheese];
        console.log(price);
    for(i=0;i<this.pMeat.length;i++) {
      price += this.meatPrice[this.pMeat[i]];
    }
        console.log(price);
    // price += this.premToppingPrice[this.pPremTopping];
    //     console.log(price);
    // price += this.toppingPrice[this.pTopping];
    //     console.log(price);
    return price;
  }
}
