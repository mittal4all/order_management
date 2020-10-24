import React, { useState, useEffect } from "react";
import FormPage from "./FormPage";
import axios from 'axios';
function CreateOrder() {
    const [order_id, setOrderId] = useState(1);
    const [item_name, setItemName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [total_amount, setAmount] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:5000/order');
            if (result.data.length >= 1) {
                const newResult = result.data.length - 1;
                const newOrderId = result.data[newResult].order_id + 1;
                setOrderId(newOrderId);
            }
        }
        fetchData();
    }, []);
    function addOrders(e) {
        e.preventDefault();
        const newOrder_id = order_id + 1;
        const orders = {
            order_id, item_name, quantity, total_amount
        }
        console.log(orders);
        axios.post('http://localhost:5000/order/add', orders)
            .then(res => console.log(res.data));

        setOrderId(newOrder_id);
        setItemName("");
        setQuantity("");
        setAmount("");
    }

    return (
        <div>
            <FormPage
                addOrders={addOrders}
                order_id={order_id}
                setOrderId={setOrderId}
                item_name={item_name}
                setItemName={setItemName}
                quantity={quantity}
                setQuantity={setQuantity}
                total_amount={total_amount}
                setAmount={setAmount}
            />
        </div>
    );
}

export default CreateOrder;