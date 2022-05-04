import { Navigate } from "react-router-dom";

const AdminRoutes = ({admin, children}) => {
    console.log('ADMIN ROUTES', admin.role);
    return admin.role === 'admin'
    ? children
    : <Navigate to='/support1' />

}

export default AdminRoutes;