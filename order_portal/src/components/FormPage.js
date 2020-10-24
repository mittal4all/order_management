import React from "react";
import { Form, Container } from "react-bootstrap";
function FormPage(props) {
    return (
        <div>
            <h1>Create Order</h1>
            <hr></hr>
            <Container fluid>
                <Form onSubmit={props.addOrders}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Order Id</Form.Label>
                        <Form.Control
                            type="text"
                            value={props.order_id}
                            required
                            disabled={true}
                            onChange={(e) => {
                                props.setOrderId(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={props.item_name}
                            required
                            onChange={(e) => {
                                props.setItemName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="text"
                            value={props.quantity}
                            required
                            onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value === "" || re.test(e.target.value)) {
                                    props.setQuantity(e.target.value);
                                }
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Total Amount</Form.Label>
                        <Form.Control
                            type="text"
                            value={props.total_amount}
                            required
                            onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value === "" || re.test(e.target.value)) {
                                    props.setAmount(e.target.value);
                                }
                            }}
                        />
                    </Form.Group>
                    <input type="submit" value="Submit" />
                </Form>
            </Container>
        </div>
    );
}

export default FormPage;
