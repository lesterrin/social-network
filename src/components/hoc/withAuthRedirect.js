import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {


    const RedirectComponent = (props) => { //откуда компонент знает про эти пропсы?
        if (!props.isAuth) return <Navigate to='/login'/>

        return <Component {...props}/>
    };

    const mapStateToPropsForRedirect = ({auth}) => ({
        isAuth: auth.isAuth
    })

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;
