import { Route, Routes } from 'react-router-dom'
import FeaturedPage from '../../Pages/FeaturedPage'
import BlogEditor from '../BlogEditor/BlogEditor'
import HomePage from '../../Pages/HomePage'
import BlogList from '../BlogList/BlogList'

const AppRoutes = () => {

  return (
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/featured' element={<FeaturedPage/>} />
    <Route path='/create' element={<BlogEditor/>} />
    <Route path='/edit/:id' element={<BlogEditor/>} />
    <Route path='/blogs' element={<BlogList/>} />
   </Routes>
  )
}

export default AppRoutes
