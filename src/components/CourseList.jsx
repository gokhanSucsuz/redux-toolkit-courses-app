import { useDispatch, useSelector } from "react-redux"
import { CourseItem } from "./CourseItem"
import { clearCourse } from "../control/courseSlice"


export const CourseList = () => {
    const dispatch = useDispatch()
    const { courses, total } = useSelector((store) => store.courses)
    return (
        <>
            <div className="container my-5">
                <section className="row gap-3 justify-content-center">

                    {
                        courses.map((item) => <CourseItem key={item.id} {...item} />)
                    }

                </section>
                <footer>
                    <div className="alert alert-info d-flex flex-column justify-content-center align-items-center gap-2" role="alert">
                        <span>Total Price = ${total}</span>
                        <button className="btn w-25 btn-sm btn-danger" onClick={() => dispatch(clearCourse())}>Clear</button>
                    </div>
                </footer>
            </div>
        </>
    )
}