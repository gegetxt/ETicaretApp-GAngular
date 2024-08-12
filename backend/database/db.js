

const mongoose = require("mongoose");

const uri = "mongodb+srv://gizemgunduz77:1@eticaretdb.piznk.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb";

const connection = () =>{
    mongoose.connect(uri, { useNewUrlParser: true, 
        useUnifiedTopology: true})
    .then(()=> console.log("MongoDb bağlantısı başarılı!"))
    .catch((err)=> console.log ("Bağlantı Hatası! Hata: " + err.message));
}

module.exports = connection;
