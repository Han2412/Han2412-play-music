const PresentModel = require('../models/Present'); // Import model

const PresentController = {
   getAll : function (req, res) {
    PresentModel .getAll((err, resulta) => {
          if (err) {
            res.status(500).json({ error: err.message });
            return;
          }
          res.render('presentplayed',{resulta})
        });
      },
};


module.exports = PresentController;
