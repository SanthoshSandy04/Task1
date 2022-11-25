const books_data = require("../Books.json");

const remove = (req,res)=>{
   try {
      // Using unique id
      
      //parse requesting the value from user end.
      const id = req.body.id;
      const data = books_data.data;

      let i = 0, ln = data.length;
      for (i;i<ln;i++){
         data[i].id = i+1;
      };
      let output
      let j = 0, len = data.length;
      for (j;j<len;j++){
         if (data[j].id == id){
            delete data[j]
            output = "successfully deleted"
            break;
         }
      }
      output = output ?output : "Value not found"
      res.status(200).send({"output": output});
      
   // Using Index ID method

      // const title = req.body.title;
      //Finding the index value;
      // const requiredIndex = books_data.data.findIndex(el => {
      //    return el.title === String(title);
      // });
      // if(requiredIndex === -1){
      //    return false;
      // };
      // let remove_obj = books_data.data.splice(requiredIndex,1)
      // res.status(200).send(books_data)
   }catch (err) {
      console.log(err);
      res.send(err);
  }
}

module.exports = remove;