
import {createBrowserRouter,  Navigate,  RouterProvider} from 'react-router-dom'
import Index from './pages/Index';
import Main from './pages/Main';
const routes = createBrowserRouter([
  { path:"", element:<Navigate to="/design/213/edit" replace />},
  { path:"/home", element:<Index/>},
  { path:"/design/:id/edit", element:<Main/>},
  {
    path:"*",
    element:<Navigate to="/home" replace />
  }

])
function App() {

  return <RouterProvider  router={routes} />;

}

export default App
