import Home from './pages/home/Home'
import User from './pages/user/User'

const routesConfig = [
    {
        path: "/",
        element: <Home />,
        exact: true
    },
    {
        path: "/user",
        element: <User />,
        exact: true
    }
]

export default routesConfig