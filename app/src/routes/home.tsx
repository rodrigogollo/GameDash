import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/404'

const HomeRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home/>}
        errorElement={<Error404 />}
      />
    </Routes>
  )
}

export default HomeRoutes