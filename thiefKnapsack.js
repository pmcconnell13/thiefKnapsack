// Thief's Knapsack

// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
// The Thief can't pick the same item twice.

// What is the maximum worth of goods that the thief can steal?

//create object of stolen goods
  //each goods value is an object with a weight and price
  var stolenGoods = {
    apple: {
      weight: 1,
      worth: 2
    },
    bowlingBall: {
      weight: 10,
      worth: 200
    },
    iPhone: {
      weight: 2,
      worth: 500
    },
    money: {
      weight: .1,
      worth: 100
    },
    shoe: {
      weight: 2,
      worth: 20
    },
    laptop: {
      weight: 5,
      worth: 1000
    },
    glasses: {
      weight: 1,
      worth: 50
    },
    gold: {
      weight: 20,
      worth: 5000
    },
    book: {
      weight: 3,
      worth: 30
    }
  };

  var optimalSteal = function(x) {
    //create weight and money counter vars
    //create container array
    //traverse object
      //if current items weight + counter var is less than X
        //push that object to container array
        //add weight to counter
      //if current items weight + counter var is more than x
        //loop through container array
          //check if current item (object) weighs less and is worth more than current item (array)
            //if it is, delete item in array and add current object item
            //subtract previous item from count, add new item
            //stop loop

     //once this is all done
       //tally up total amount
     //return total amount

     var counter = 0;
     var money = 0;
     var container = [];
     for (var item in stolenGoods) {
         var stolenItem = stolenGoods[item]
       if (counter + stolenItem.weight <= x) {
           container.push([item,stolenItem]);
           money += stolenItem.worth;
           counter += stolenItem.weight;
       } else if (stolenItem.price >= money && stolenItem.weight < counter) {
           //need to loop through array and remove items by least value and most weight
       }
          for (var i = 0; i < container.length; i++) {
             if (stolenItem.weight <= container[i][1].weight && stolenItem.worth >= container[i][1].worth) {
                counter -= container[i][1].weight;
                counter += stolenItem.weight;
                container.splice(i, 1, [item,stolenItem])
                break;
             }
          }
       }
     }
      console.log(container)
  }

  console.log(optimalSteal(6))