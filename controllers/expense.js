const { v4: uuidv4 } = require('uuid');
let Expense = require('../models/Expense');
let Budget = require('../models/Budget');


exports.create = (req, res,next) => {
    req.body.id = uuidv4();
    req.body.userId = req.user.id;
    Expense.create(req.body, (error, data) => {
        if (error) {
          return res.status(403).json({success:false,message:"Unexpected Error",error});
        } else {
            Budget.findOne({ name: req.body.budget }, function(err, obj) {
              console.log(obj)
                const id = obj._id;
                Budget.updateOne(
                    { _id: id },
                  { $inc: { capacity: req.body.expense } }
                ).then((data) => {
                  if (!data) {
                    console.log("not updated")
                    return res.status(400).json({
                      errors: "Not Updated",             
                    });
                  }
                  next();
                });
              });
            return res.json(data)
        }
    })
};



exports.read = (req, res,next) => { 
  Expense.find({userId: req.user.id},(error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
};

exports.readById = (req, res,next) => { 
  Expense.find((error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
};


  exports.monthlyReport = (req, res,next) => { 
    Expense.find({userId: req.user.id},(error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
  }
