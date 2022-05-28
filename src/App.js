import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignIn/SignUp';
import Header from './pages/Header/Header';
import Products from './pages/products/Products';
import RequireAuth from './pages/SignIn/RequireAuth/RequireAuth';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Footer/Footer';
import Blog from './pages/Blogs/Blog';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Dashboard from './pages/Dashboard/Dashboard';
import MyReview from './pages/Dashboard/MyReview';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/ProductsCart' element={<Products></Products>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
          </Route>
        <Route path='/Purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>


      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
