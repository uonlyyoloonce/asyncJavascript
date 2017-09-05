
// // function getStockSymbols(stocks) {
// //     var symbols = [];
    
// //     stocks.forEach(function(stock) {
// //       symbols.push(stock.symbol);
// //     });
    
// //     return symbols;
// //   }


  
//   var symbols = getStockSymbols([
//     { symbol: "XFX", price: 240.22, volume: 23432 },
//     { symbol: "TNZ", price: 332.19, volume: 234 },
//     { symbol: "JXJ", price: 120.22, volume: 5323 },
//   ]);
  
//  // console.log(JSON.stringify(symbols));

//   //map

// function getStockSymbols(stocks) {
//    return stocks.map(function(stock){
//     return stock.symbol;

//    })
//   }

//   console.log(JSON.stringify(symbols));

//   //filter

//   function getStocksOver(stocks, minPrice) {
//     return stocks.filter(function(stock) {
//       return stock.price >= minPrice;
//     })
//   }
  
//   Array.prototype.filter=function(predicate)
//   {
//     var results=[];
//     this.forEach(function(item) {
//       if(predicate(item)){
//          results.push(item);
//       };
//       return results;
//     });

//   }
//   var expensiveStocks = getStocksOver([
//     { symbol: "XFX", price: 240.22, volume: 23432 },
//     { symbol: "TNZ", price: 332.19, volume: 234 },
//     { symbol: "JXJ", price: 120.22, volume: 5323 },
//   ],
//   150.00);
  
//   console.log(JSON.stringify(expensiveStocks));

  //filter and map 

//   var stocks = [
//     { symbol: "XFX", price: 240.22, volume: 23432 },
//     { symbol: "TNZ", price: 332.19, volume: 234 },
//     { symbol: "JXJ", price: 120.22, volume: 5323 },
//   ];

  
// var filteredStockSymbols = 
// stocks.
//   filter(function(stock) {
//     return stock.price >= 150.00;
//   }).
//   map(function(stock) {
//     return stock.symbol;
//   })

// filteredStockSymbols.forEach(function(symbol) {
// console.log(symbol);
// })

/** 
 *  concatAll
 *
*/
var exchanges = [
  [
      { symbol: "XFX", price: 240.22, volume: 23432 },
      { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
  [
      { symbol: "JXJ", price: 120.22, volume: 5323 },
      { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];
Array.prototype.concatAll = function() {
  var results = [];
  
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);    
    });
  });  

  return results;
};


var stocks =  exchanges.concatAll();
    
stocks.forEach(function(stock) {       
  console.log(JSON.stringify(stock));  
});
