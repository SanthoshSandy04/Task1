const books_data = require("../Books.json");

const group = (req,res)=>{
    try {
        // Grouping the data based on all language

        // finding to the list of language
        const filter_lang = books_data.data.filter((v,i,a)=>a.findIndex(v2=>(v2.language===v.language))===i)
        console.log("filter_lang",filter_lang);
        // assume the empty array for grouping the value
        let arr = [];
        for (let i=0; i<filter_lang.length; i++){
            console.log(filter_lang[i].language);
            const filter = books_data.data.filter(element => element?.language.toLocaleLowerCase().match(filter_lang[i].language.toLocaleLowerCase()))
            console.log(filter);
            arr.push(filter)
        } 
        res.status(200).send(arr)

        // Grouping the data based on user end value
        //parse requesting the value from user end.
        // const search = req.body.search;
        //searching in to the language
        // const filter = books_data.data.filter(element => element?.language.toLocaleLowerCase().match(search.toLocaleLowerCase()))
        // console.log(filter);
        // res.status(200).send(filter)
    }catch (err) {
        console.log(err);
        res.send(err);
    }
    
}

module.exports = group;