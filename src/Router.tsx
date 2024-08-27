import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home/Home.page';
import About from './pages/About/About.page';
import Category from './pages/Category/Category.page';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />
  },
  { path: "/category", element: <Category /> }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
