const { House } = require('moongose/models');

const House = require('../models/house.model').House;

async function createHouse (req,res){

    const houseName = req.body.Hname;
    const houseType = req.body.Htype;
    const housePrice = req.body.Hprice;
    const houseImage = req.body.Himage;



    if (houseName && houseType && price && houseImage){

        try{
            const newUser = await new User ({
                houseImage: Himage,
                houseName: Hname,
                houseType: Htype,
                housePrice: Hprice
            }).save();

            res.status(200).json({
                message:"Casa creada",
                obj: newUser
            }

            )

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Internal Error!",
                obj:null
            })
        } 
    }else{
        res.status(400).json({
            message: "Consulta tus parametros",
            obj:null
        })
    }

}

async function updateHouse (req,res){

    const houseName = req.body.Hname;
    const houseType = req.body.Htype;
    const housePrice = req.body.Hprice;
    const houseImage = req.body.Himage;

    if (houseName && houseType && price && houseImage){

        try{
            const updateHouse = await updateHouse.updateOne({
                houseImage: Himage,
                houseName: Hname,
                houseType: Htype,
                housePrice: Hprice
            },{
                $set : {
                    houseImage: Himage,
                    houseName: Hname,
                    houseType: Htype,
                    housePrice: Hprice
                }
            });
        }catch(err){
            console.error("Error")
        }

        async function findHouse(req,res){
            
            if (houseName && houseType && housePrice){ 
                try{
                    const findHouse = await findHouse.findOne({
                        houseName : Hname,
                        houseType : Htype,
                        housePrice : Hprice
                        

                    },{

                    //aqui el finone
                    })
                }
            }
        }

        module.exports = {
            createHouse, updateHouse
         }
    }
}
        