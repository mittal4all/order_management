import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from 'axios';
function CheckOrder() {
    const [orders, ordersArr] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:5000/order');
            console.log(result);
            ordersArr(result.data);
        };
        fetchData();
    }, []);

    async function deleteOrder(id) {
        const result = await axios.delete('http://localhost:5000/order/' + id);
        console.log(result.data);
        ordersArr(orders.filter(ele => ele._id !== id))

    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((ele, index) => {
                        console.log(ele, index);
                        return (
                            <tr key={index} ele={ele.id}>
                                <td>{ele.order_id}</td>
                                <td>{ele.item_name}</td>
                                <td>{ele.quantity}</td>
                                <td>{ele.total_amount}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            deleteOrder(ele._id);
                                        }}
                                    >
                                        Remove
                                    </button>

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default CheckOrder;



// {books.map((ele, index) => {
//     return (
//       <tr key={index} ele={ele.id}>
//         <td>{index + 1}</td>
//         <td>{ele.Authorname}</td>
//         <td>{ele.Bookname}</td>
//         <td>{ele.Price}</td>
//         <td>
//           <button
//             onClick={() => {
//               removeFunction(ele.Authorname);
//             }}
//           >
//             Remove
//           </button>{" "}
//           <Link to={`editpage/${index}`}>
//             <button>Edit</button>
//           </Link>
//         </td>
//       </tr>
//     );
//   })}