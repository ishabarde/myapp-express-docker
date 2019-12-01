const express = require('express')
const db = require('./db')
const utlis = require('../utlis')

const router = express.Router()

router.get('/',(request,response)=>{
    const connection = db.connect()
    const statement = `select id, title, description from product`
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utlis.createResult(error, data))
    });
})



router.post('/',(request,response)=>{
    const {title, description} = request.body
    const connection = db.connect()
    const statement = `insert into product (title, description) values ('${title}','${description}')`
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utlis.createResult(error, data))
    });
});



// router.get('/',(request,response)=>{
//     const connection = db.connect()
//     const statement = `select id, title, description, price from product`
//     connection.query(statement, (error, data) => {
//         connection.end();
//         response.send(utils.createResult(error, data))
//     });
// });



// router.get('/',(request,response)=>{
//     const connection = db.connect()
//     const statement = `select id, title, description, price from product`
//     connection.query(statement, (error, data) => {
//         connection.end();
//         response.send(utils.createResult(error, data))
//     });
// });


module.exports = router