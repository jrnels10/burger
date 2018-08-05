const orm = require("../config/orm.js");

//create code the will call the ORM functions using
//burger specific input from the ORM

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
            // console.log(res)
        })
    }
}

// console.log("burgers.js page: " + burger.selectAll())



module.exports = burger;