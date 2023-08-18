const employeeService=require('../data/employeeservice');

exports.getEmployeecontroller=async function(req,res){
const result=await employeeService.employeeService({})
res.status(200).json(result);
}

exports.addEmployeeController=async function(req,res){
    const obj={
        name:req.body.name,
        age:req.body.age
    }
    const result=await employeeService.addEmployeeService(obj);
    res.status(200).json(result);
}

exports.deleteEmployeeController=async function(req,res){
    const id=req.params.id;
    const result=employeeService.deletemployeeService(id);
    res.status(200).json(result);
}

exports.updateEmployeeController=async function(req,res){
    console.log(req)
    const id=req.params.id;
    const obj={
        name:req.body.name,
        age:req.body.age
    }
    const result=await employeeService.updateEmployeeService(id,obj);
    console.log(id);
    console.log(obj)
    res.status(200).json(result)
}