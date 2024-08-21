import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home/Home.page';
import About from './pages/About/About.page';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: "/about",
    element :<About/> 
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
