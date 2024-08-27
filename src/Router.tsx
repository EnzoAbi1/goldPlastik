import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home/Home.page';
import About from './pages/About/About.page';
import Products from './pages/Products/Products.page';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />
  },
  { path: "/products", element: <Products /> }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
