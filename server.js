var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Stock');
var Schema=mongoose.Schema;
module.exports={mongoose};

var stockSchema = new Schema({
  itemNo: Number,
  itemName: String,
  stockQty: Number,
  stockSold: Number,
  stockLevel: Number
});

var Stock = mongoose.model('Stock', stockSchema);
var arr = new Array();
var doc = new Stock({itemNo: 1, itemName: 'A1',stockQty:50 });
for(i=1; i <= 10; i++){
        var stock_obj = {};
       // var post = rows[i];
        stock_obj.itemNo = i;
        stock_obj.itemName = `Item_${i}`;
        stock_obj.stockQty = 50;
        stock_obj.stockSold = 0;
        stock_obj.stockLevel= stock_obj.stockQty - stock_obj.stockSold;
        arr.push(stock_obj);
    }


Stock.insertMany(arr,(err,res)=>{
    if(err){
        console.log('Error Occured');
    }
    else{
        console.log('Inserted');
    }
});

