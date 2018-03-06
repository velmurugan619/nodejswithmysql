var express = require('express');
const sequelize = require('../config/config');
const FutureOrder = require('../model/farmer');
module.exports = app => { 
    app.get('/farmer', (req, res) => { 
        sequelize.query("SELECT * FROM address").then(myTableRows => {
            if(myTableRows) {
                res.status(200).json({
                    message: myTableRows
                })
            } else {
                res.status(500).json({
                    message: 'No data found'
                })
            }
          })
          .catch(err => {
              res.status(500).json({
                  error: err
              })
          })
    });
    
    app.post('/farmer', (req, res) => { 
        const futureorder = new FutureOrder({
            future_order_id: req.body.FutureOrderId,
            reason_for_reject: req.body.ReasonForReject
        });
        
        futureorder.save()
        .then(result => {
            res.status(200).json({
                message: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
    });
}
