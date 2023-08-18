const express=require('express');
const router=express.Router();
const controller=require("../data/employeecontroller");

router.get('/getEmployee',controller.getEmployeecontroller);

router.post('/addEmployee',controller.addEmployeeController);

router.delete('/deleteEmployee/:id',controller.deleteEmployeeController);

router.put('/updateEmployee/:id',controller.updateEmployeeController)
module.exports = router;