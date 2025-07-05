import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogPage from "./pages/blogPage";
import TestForm from './pages/Test';
import './css/home.css';
import './css/navbar.css';
import './css/blogPage.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <About />
      </>
    ),
  },
  {
    path: "/blog/:blogId",
    element: (
      <>
        <NavBar />
        <BlogPage />
      </>
    ),
  },
  {
    path: "/test",
    element: (
      <>
        <NavBar />
        <TestForm />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <NavBar />
        <h1>404 Not Found</h1>
      </>
    ),
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;