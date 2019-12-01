module.exports = {
    connect : connect
}

const mysql = require("mysql")

function connect()
{
    const connection = mysql.createConnection({
        host: "192.168.43.243",
        user: "root",
        password: "root",
        database: "devops",
        port: 9899
    })
    
    connection.connect()
    return connection
}


module.exports = {
    connect: connect
}