
// import books_data from '../Books.json'
const books_data = require("../Books.json");
// var jp = require('jsonpath');

const search = (req,res)=>{
    try {
        //parse requesting the value from user end.
        const search = req.body.search;
        //searching in to the booktitle
        const filter = books_data.data.filter(element => element?.title.toLocaleLowerCase().match(search.toLocaleLowerCase()))
        console.log(filter); 
        res.status(200).send(filter)
    }catch (err) {
        console.log(err);
        res.send(err);
    }
    
}

module.exports = search;