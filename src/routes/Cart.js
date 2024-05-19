import { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store";

function Cart(){

let state = useSelector((state) => state)
let dispatch = useDispatch()

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a , i) => {
                            return (
                                <tr key ={i}>
                                    <td>1</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td>ㅇ</td>
                                    <td>
                                        <button onClick={() => {
                                            dispatch(addCount(state.cart[i].id))
                                        }}>+</button>
                                    </td>
                                </tr>
                                    )
                                })
                             }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart