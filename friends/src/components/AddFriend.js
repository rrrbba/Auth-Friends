import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createFriend } from '../actions';




function AddFriend(props) {
    const [friend, setFriend] = useState({name: '', age: 1, email: ''});

    const handleChanges = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.createFriend({...friend, age: parseInt(friend.age)});
        setFriend({name: '', age: 1, email: ''});
        props.history.push('/friends');
    }

    return (
    <div className="add-friend">
        <div className="header">
            <h4>ADD FRIEND</h4>
        </div>
        <div className="add-form" onSubmit={handleSubmit}>
            <form>
                <input type="text" name="name" placeholder="friend name" onChange={handleChanges} />
                <input type="number" name="age" placeholder="friend age" onChange={handleChanges} />
                <input type="text" name="email" placeholder="friend email" onChange={handleChanges} />
                <div className="footer">
                    <Link to='/friends'><button>Cancel</button></Link>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    friends: state.friends,
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    error: state.error
});

export default connect(mapStateToProps, { createFriend })(AddFriend);
