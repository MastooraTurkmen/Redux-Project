import React from 'react'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {
    const dispatch = useDispatch()
    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button onClick={() => {
                        dispatch(closeModal())
                        dispatch(clearCart())
                    }} className="btn confirm-btn">confirm</button>
                    <button onClick={() => {
                        dispatch(closeModal())
                    }} className="btn clear-btn">cancel</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal