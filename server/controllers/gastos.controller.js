const express=require('express');
const router=express.Router();
const Gasto=require('../models/gastos');
const gastosController={};

gastosController.getGastos=async(req,res)=>{
    const gastos = await Gasto.find();
    res.json(gastos);
}

gastosController.getGastos=async(req,res)=>{
    const gastos = await Gasto.find();
    res.json(gastos);
    //res.json({status:'gastos...'});
}

gastosController.createGastos = async(req,res)=>{
    const gasto = new Gasto(req.body);
    console.log(gasto);
    await gasto.save();
    res.json('status: Gasto Guardado');
}

gastosController.getGasto=async(req,res)=>{
    console.log(req.params.id);
    const gasto= await Gasto.findById(req.params.id);
    res.json(gasto);
   }

gastosController.getGastoTip=async(req,res)=>{
    console.log(req.params.tipo);
    const gasto= await Gasto.
    res.json(gasto);
}

   gastosController.editGasto=async(req,res)=>{
    const {id}=req.params;
    const gasto={
    tipo: req.body.tipo,
    ruc: req.body.ruc,
    empresa: req.body.empresa,
    monto: req.body.monto
    };
    await Gasto.findByIdAndUpdate(id, {$set:gasto},{new: true});
    res.json('status: Gasto actualizado');
   }   
gastosController.deleteGasto=async(req,res)=>{
    const {id}=req.params;
    await Gasto.findByIdAndDelete(id,function(err,docs){
        if(err){
            console.log(err);
        }
        else{
            res.json('status: Gasto eliminado');
        }
    });
}

gastosController.getGastoTip=async(req,res)=>{
    const gasto = await Gasto.find({tipo:req.params.tipo});
    res.json(gasto);

}

module.exports=gastosController;  
   