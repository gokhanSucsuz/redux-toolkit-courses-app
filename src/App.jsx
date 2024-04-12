import { useEffect } from 'react'
import { CourseList } from './components/CourseList'
import { Navbar } from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { totalPrice } from './control/courseSlice'

function App() {
  const { courses } = useSelector(store => store.courses)
  useEffect(() => {
    dispatch(totalPrice())
  }, [courses])

  const dispatch = useDispatch()
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CourseList />
        </div>
      </div>
    </>
  )
}
export default App
