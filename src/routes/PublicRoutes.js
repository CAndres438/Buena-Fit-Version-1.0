import { Navigate } from "react-router-dom";

const PublicRouters = ({isAuth, children}) => {
    return !isAuth
    ?children
    :<Navigate to="/*"/>
};

export default PublicRouters;