import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductList from "./components/Product/ProductList";
import Product from "./components/Product/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { path: "product-list", Component: ProductList },
        { path: "product/:id", Component: Product },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
