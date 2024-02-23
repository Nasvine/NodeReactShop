import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
    {
        path: '/', element: <App />,

    },
    {
        path: '/home', element: <App />
    },
    {
        path: '/about', element: <About />
    },
    {
        path: '/contact', element: <Contact />
    },
    {
        path: '/products', element: <Products />
    },
    {
        path: '/products/:id', element: <ProductDetail />
    },
]);

export default router;