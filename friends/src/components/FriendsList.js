import React from 'react';

import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { getFriends } from '../actions';


class FriendsList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getFriends();
    }



    render() {
        
        return (
        <>   
    <h1>Friends List</h1>

        {this.props.isFetching && 
          

            <Loader type = "Puff" height = "60" width = "60" />
            <h1>Loading Friends!</h1>

     
        }
a
     
       {this.props.friends &&
        <div>
            
            <Link to = "/add">Add Friend!</Link>

        {this.props.friends.map(friend => (
            <Friend key = {friend.id} name = {friend.name} age = {friend.age} email = {friend.email} />
        ))}
      
        }
        </div>
// {/*        
       </div> */}

        )
    }
   
};

export default FriendsList