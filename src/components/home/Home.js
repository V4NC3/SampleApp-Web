import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    render() {
        return (
            <div>
                {this.props.user.isLoggedIn ||
                    <div>One moment while loading user...</div>}
                {!this.props.user.isLoggedIn ||
                    <div>
                        <p>This is the Home page...</p>
                        <div> Welcome {this.props.user.firstName} {this.props.user.lastName} </div>
                    </div>}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer
        , firstName: state.UserReducer.firstName
        , lastName: state.UserReducer.lastName
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        home: (data) => {
            dispatch(currentLoginStatus(data));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);