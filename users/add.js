const books_data = require("../Books.json");

const add_books = (req,res)=>{
    try {
        //parse requesting the value from user end.
        const details = req.body;
        //pushing into the Json Array.
        books_data.data.push(details);
        console.log(books_data); 
        res.status(200).send(books_data)
    }catch (err) {
        console.log(err);
        res.send(err);
    }
    
}

module.exports = add_books;