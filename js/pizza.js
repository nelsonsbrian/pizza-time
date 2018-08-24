

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
    CanadianBacon: .50
  }

  this.premToppingPrice = {
    Bacon: 1.00,
    Artichoke: .80,
    Anchovies: .90,
  }

  this.toppingPrice = {
    Any: .31
  }

  this.price = function() {
    var price = 0;
    price += this.sizePrice[this.pSize];
    price += this.crustPrice[this.pCrust];
    price += this.saucePrice[this.pSauce];
    price += this.cheesePrice[this.pCheese];
    for(i=0;i<this.pMeat.length;i++) {
      price += this.meatPrice[this.pMeat[i]];
    }
    for(i=0;i<this.pPremTopping.length;i++) {
      price += this.premToppingPrice[this.pPremTopping[i]];
        console.log(price);
    }
    for(i=0;i<this.pTopping.length;i++) {
      price += this.toppingPrice["Any"];
        console.log(price);
    }
    return price;
  }
}
