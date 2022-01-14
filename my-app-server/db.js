const path = require("path");
const sqlite = require("sqlite3");

//opening database
const db = new sqlite.Database(__dirname + "/Database/main.sqlite", (error) => {
    if (error) {
        console.error(error.message);
    }
    console.log("Conneected to database");
});

db.serialize(() => {
    // Serializing
    db.run(
        "CREATE TABLE IF NOT EXISTS Card(cardNo INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, logo1, coins NUMBER, image, name, dob, logo2)",
        (error) => {
            if (error) {
                console.error(error.message);
            } else {
                console.log("Table Exist");
            }
        }
    )
        // .each("SELECT * FROM Card", (error, row) => {
        //     if (error) {
        //         console.error(error.message);
        //     } else {
        //         console.log(row);
        //     }
        // });
});

//closing database
// db.close((error) => {
//     if (error) {
//         console.error(error.message);
//     }
//     console.log("Database Closed");
// });

module.exports=db;