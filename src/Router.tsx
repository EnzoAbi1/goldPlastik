import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home/Home.page';
import About from './pages/About/About.page';
import Category from './pages/Category/Category.page';
import Products from './pages/Products/Products.page';
import Product from './pages/Product/Product.page';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />
  },
  { path: "/category", element: <Category /> },
  { path: "/products/:category", element: <Products /> },
  { path: "/:productName", element: <Product /> }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
