import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Friend from './Friend';



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
            
            {this.props.isFetching && <p className="fetching">Fetching...</p>}
            {this.props.friends && 
            <div className="friends-list">
                <div className="header">
                    <h2>Friend's List</h2>
                    <Link to='/add'><button>Add Friend</button></Link>
                </div>
                {this.props.friends.map(friend => (
                    <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email}/>
                ))}
            </div>
            }
            </>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    error: state.error
});

export default connect(
    mapStateToProps, 
    { getFriends })(FriendsList);