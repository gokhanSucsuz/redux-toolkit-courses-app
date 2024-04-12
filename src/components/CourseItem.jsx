/* eslint-disable react/prop-types */
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { removeItem, increase, decrease } from "../control/courseSlice"
export const CourseItem = ({ id, title, price, img, quantity }) => {
    const dispatch = useDispatch();
    return (
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0 py-2">
                <div className="col-md-4">
                    <img src={img} className="img-fluid w-100 rounded-start" style={{ maxHeight: 100 }} alt={title} />
                </div>
                <div className="col-md-8 d-flex">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Price: ${price}</p>
                        <button className="btn" onClick={() => dispatch(increase(id))}>
                            <BsChevronUp />
                        </button>
                        <p className="card-text"><small className="text-body-secondary">Quantity: {quantity}</small></p>
                        <button className="btn" onClick={() => dispatch(decrease(id))}>
                            <BsChevronDown />
                        </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeItem(id))}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
