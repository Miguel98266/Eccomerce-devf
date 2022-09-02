import { useContext } from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import {
  Home,
  ListProducts,
  SingleProduct,
  NotFound,
  SharedLayout,
  Login,
  MyAccount,
  Register,
  Addproduct

} from "@/pages";
import { AuthContext } from "@/Context/Auth.jsx";

const MainRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/myaccount" element={isAuth ? <MyAccount /> : <Navigate to='/' replace />}/>
          <Route path="/addproduct" element={isAuth ? <Addproduct /> : <Navigate to='/' replace />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>

        <Route path="products" element={<SharedLayout />}>
          <Route index element={<ListProducts />} />
          <Route path=":productId" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
