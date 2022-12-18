import Header from "./header";
import React from "react";
import {connect} from "react-redux";
import {authMe} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = ({auth}) => ({
    userId: auth.userId,
    email: auth.email,
    login: auth.login,
    isAuth: auth.isAuth
});

export default connect(mapStateToProps, {authMe})(HeaderContainer);
