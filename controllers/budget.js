let Budget = require('../models/Budget');


exports.create = (req, res,next) => {
    Budget.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
};


exports.read = (req, res,next) => {
  Budget.find((error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
}

exports.monthBudget = (req, res, next)=>{
    Budget.aggregate(
        [
          {
            $group: {
              _id: { $month: "$date" },
              total: {
                $sum: "$budget",
              },
            },
          },
        ],
        (err, data) => {
          if (err) {
            return res.status(400).json({
              error: err,
            });
          }
          return res.json(data);
        }
      );
}

// router.route('/month/chart').get((req, res, next) => {
//     const month = new Date().getMonth();
//     const year = parseInt(2020);
//     Budget.find((error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
//   });

