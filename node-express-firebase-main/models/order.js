class Order {
    

    constructor(id, customerName, orderStatus, numberOfPages, isColored, size, isDispactchToPrinter, isPrintOnBothSides, paymentStatus,customerEmail, customerPhoneNumber, address  ) {
           this.id = id;
           this.orderStatus = orderStatus;
           //this.orderDetails = new OrderDetails(numberOfPages, isColored, size, isDispactchToPrinter, isPrintOnBothSides, paymentStatus)
           //this.customer = new Customer(customerName,customerEmail, customerPhoneNumber, address );

        }
}

class OrderDetails{
    constructor(numberOfPages, isColored, size, isDispactchToPrinter, isPrintOnBothSides, paymentStatus){
        this.isColored = isColored;
        this.numberOfPages =   numberOfPages;
        this.size = size;
        this.isDispactchToPrinter = isDispactchToPrinter;
        this.isPrintOnBothSides = isPrintOnBothSides;
        this.paymentStatus = paymentStatus;
    }
}
class Customer{
    constructor(customerName,customerEmail, customerPhoneNumber, address  ){
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerPhoneNumber = customerPhoneNumber;
        this.address = address;
    }
}
module.exports = Order;