'use strict';

const firebase = require('../db');
const Order = require('../models/order');
const firestore = firebase.firestore();


const addOrder = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('orders').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllOrders = async (req, res, next) => {
    console.log("get all route hit")
    try {
        const orders = await firestore.collection('orders');
        const data = await orders.get();
        const ordersArray = [];
        if(data.empty) {
            res.status(404).send('No orders record found');
        }else {
            data.forEach(doc => {
                const order = new Order(
                    doc.id,
                    doc.data().orderStatus,
                    // doc.data().orderDetails.numberOfPages,
                    // doc.data().forderDetails.isColored,
                    // doc.data().orderDetails.size,
                    // doc.data().orderDetails.isDispactchToPrinter,
                    // doc.data().orderDetails.isPrintOnBothSides,
                    // doc.data().orderDetails.paymentStatus,
                    // doc.data().year,
                    // doc.data().semester,
                    // doc.data().status
                );
                console.log(order);
                ordersArray.push(order);
            });
            res.send(ordersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getOrder = async (req, res, next) => {
    console.log("gt order hit")
    try {
        const id = req.params.id;
        const order = await firestore.collection('orders').get(id);
        //const data = await order.get();
        console.log(order);
        if(!data.exists) {
            res.status(404).send('Order with the given ID not found');
        }else {
            res.send(order.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateOrder = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const order =  await firestore.collection('orders').doc(id);
        await order.update(data);
        res.send('order record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteOrder = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('orders').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    deleteOrder,
    updateOrder,
    getOrder,
    getAllOrders,
    addOrder

}