const db = require("./../db");

// Retrieve all Cards
exports.cardAll = async (req, res) => {
    db.all("SELECT * FROM Card ORDER BY dob", (error, row) => {
        if (error) {
            // console.error(error.message);
            res.json({
                errorMessage: `There was an error retrieving cards: ${error.message}`,
            });
        } else {
            // console.log(row);
            res.json(row);
        }
    });
};

// get specific card
exports.cardSpecific = async (req, res) => {
    db.get("SELECT * FROM Card WHERE cardNo=?", req.body.no, (error, row) => {
        if (error) {
            // console.error(error.message);
            res.json({
                errorMessage: `There was an error retrieving cards: ${error.message}`,
            });
        } else {
            // console.log(row);
            res.json(row);
        }
    });
};

// Create new card
exports.cardNew = async (req, res) => {
    // console.log(req.body);
    db.run(
        "INSERT INTO Card(logo1, coins, image, name, dob, logo2) VALUES(?,?,?,?,?,?)",
        [
            req.body.logo1,
            req.body.coins,
            req.body.image,
            req.body.name,
            req.body.dob,
            req.body.logo2,
        ],
        (error) => {
            if (error) {
                // console.error(error.message);
                res.json({
                    errorMessage: `There was an error adding card: ${error.message}`,
                });
            } else {
                console.log("Data Added");
                db.get(
                    "SELECT * FROM Card ORDER BY cardNo DESC LIMIT 1",
                    (error, row) => {
                        if (error) {
                            // console.error(error.message);
                        } else {
                            // console.log(row);
                            res.json({
                                successMessage: `Card added`,
                                cardNo: row.cardNo,
                            });
                        }
                    }
                );
                // res.json({
                //     successMessage: `Card added`,
                // });
            }
        }
    );
};

// Remove specific card
exports.cardRemove = async (req, res) => {
    // console.log(req.body);
    // req.body.no
    db.run("DELETE FROM Card WHERE cardNo=?", req.body.no, (error) => {
        if (error) {
            // console.error(error.message);
            res.json({
                errorMessage: `There was an error deteting cards: ${error.message}`,
            });
        } else {
            // console.log("Successfully Deleted");
            res.json({
                successMessage: `Card Deleted`,
            });
        }
    });
};

// Exporting
// module.exports = cardAll;
// module.exports = cardNew;
// module.exports = cardRemove;
