import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Home/Home.page';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
