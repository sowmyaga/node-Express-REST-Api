const employeemodel=require('../data/employeemodel');

exports.employeeService=function(query){
    const data=employeemodel.find(query);
   return data;
}

exports.addEmployeeService=async function(obj){
    const result=new employeemodel(
        obj
    )
    console.log("reslt",result)
    return await result.save();
}

exports.deletemployeeService=async function(id){
    const result=employeemodel.findByIdAndRemove(id);
    return await result;
}

exports.updateEmployeeService=async function(id,obj){
    // const result=new employeemodel(obj);
    const update = { $set: obj};
const options = {};
   return await employeemodel.updateOne(id,update,options)
}