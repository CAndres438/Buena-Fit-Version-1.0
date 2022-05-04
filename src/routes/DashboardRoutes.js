
import { Navigate, Route, Routes } from "react-router-dom"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Fisics from "../pages/Fisics";
import  Home  from "../pages/Home";
import DashboardAdminRoutes from "./DashboardAdminRoutes";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import AdminRoutes from "./AdminRoutes";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Support from "../pages/Support";
import Payment from "../pages/Payment";


const promise = loadStripe (
    "pk_test_51KnArTJaDltuSn9Nj7gxjtVoXGarC9RzF3sPvQh0BLPKgXhgSCgX5syMsdIXtPOZnrnVI6LvI5Dt4KtvdpeH6mo900O0OA7PWH"
  )

const DashboardRoutes = ({userAdmin}) => {
    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/category" element={<Category />} /> */}
                <Route path="/detalle" element={<Detail />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
                <Route path="/payment" element={
                    <div>
                        <Elements stripe={promise}>
                        <Payment/>
                        </Elements>
                    </div>
                } />

                <Route path="/support" element={
                    <AdminRoutes 
                    admin={userAdmin}>
                    <DashboardAdminRoutes />
                    </AdminRoutes>

                }/>

                <Route path="/support1" element={<Support />}/>

                <Route path="*" element={<Navigate to='/' />} />

               
            </Routes>
        </div>
    )}
export default DashboardRoutes;