const connection = require("../config/connection.js");

const orm = {
    //get
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log("orm.js page: ")
            console.log(result);
        });
    }

    // selectAll: function(tableInput, cb){
    //     const queryString = "SELECT * FROM ??";
    //     connection.query(queryString,[tableInput],function(err, result){
    //         if(err) throw err;
    //         console.log(result);
    //         cb(result)
    //     })
    // },
    // //post
    // insertOne: function(paramOne){
    //     const queryString = "SELECT * FROM ??";
    //     connection.query(queryString,[paramOne],function(err, result){
    //         if(err) throw err;
    //         console.log(result);
    //     })
    // },
    // //update
    // selectAll: function(paramOne){
    //     const queryString = "SELECT * FROM ??";
    //     connection.query(queryString,[paramOne],function(err, result){
    //         if(err) throw err;
    //         console.log(result);
    //     })
    // },
}
// console.log(orm.selectAll())
module.exports = orm;
