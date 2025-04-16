const Order= require("../models/Order")


const getOrders = async(req,res)=>{
    try{
        const orders = await Order.find()
        res.status(200).json(orders);
    }catch(error){
        res.status(500).json({ message: error.message });
    }

}

module.exports={getOrders}