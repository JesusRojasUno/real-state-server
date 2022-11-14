const configuration = {

mongodb:{
    URL: process.env.DB_URL || "mongodb+srv://root:ULSA@cluster0.v7xgf.mongodb.net/test"
    
},
jwt:{
    secretKey:"PII"
}
    }
    module.exports={
        configuration
}