import {useLocation, useNavigate, useParams} from "react-router-dom";
import React from "react";

const withRouter = (Component) => { //Разве это не hoc?
    return (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    };
}

export default withRouter;
