import React from 'react';
import { Route, Redirect } from 'react-router-dom';


//Private route rules:
//1. It has the same API as a <Route />
// 2. It renders a <Route /> and passes all the props through to it.
//   3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.

const PrivateRoute = ({ component: Component, ...rest }) => {
    
    //const Component = props.component is the same  as the above

    return(
        //privateroute can now accept any props route could except component
        <Route 
        {...rest}
        
        component

        //make sure the user is logged in
        render = {props => {
            if (localStorage.getItem('token')){
                return <Component {...props} />
            } else {
                //if they're not logged in, it redirects
                return <Redirect to = '/login' />
            }
        }}
        />

    
    );
}

export default PrivateRoute;