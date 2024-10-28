import { Request, Response } from "express";
import Customer from '../model/Customer';

//Post a customer
export const addCustomer = async(req: Request, res: Response) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({error: "Cannot add a customer"});
    }
};

//Get all customers
export const getAll = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({error: "Cannot get all customer"});
    }
};

//update a customer
export const updateCustomer = async (req: Request, res: Response) => {
    console.log(req.params);
    const id = req.params.id;
    try {
        const updateCustomer = await Customer.findOneAndUpdate(
            {_id:id},
            req.body,
            {new:true, runValidators: true}
        );

        if(!updateCustomer){
            return res.status(404).json({error: "Customer not found"});
        }

        res.json(updateCustomer);
    } catch (error) {
        res.status(400).json({error: "Cannot update the custonmer"});
    }
};

//delete a customer 
export const deleteCustomer = async (req: Request, res: Response) => {
   const id = req.params.id;
    try {
        const deleteCustomer = await Customer.findOneAndDelete({_id:id});
        if(!deleteCustomer){
            return res.status(404).json({error: "Customer not found"});
        }
        res.json(deleteCustomer);
    } catch (error) {
        res.status(4004).json({error: "Cannot delete the customer"});
    }
};