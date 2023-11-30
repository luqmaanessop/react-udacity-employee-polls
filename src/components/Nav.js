import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {logoutAuthedUser} from '../actions/authedUser'

const Nav = ({dispatch, authedUserId, authedUserIcon}) => {

    const logout = (e) => {
        e.preventDefault();

        dispatch(logoutAuthedUser());
    };
    return (
        <nav className="flex items-center justify-between bg-blue-500 p-4">
            <div className="flex space-x-4">
                <Link to="/" className="text-white">Home</Link>
                <Link to="/leaderboard" className="text-white">Leaderboard</Link>
                <Link to="/add" className="text-white">New Poll</Link>
            </div>
            <div className="flex items-center">
                <img src={authedUserIcon} alt="Profile" className="mr-1 h-6 w-6 rounded-full overflow-hidden" /><span className="text-white" data-testid="user-information">User: {authedUserId}</span></div>
            <button onClick={logout} className="text-white">Logout</button>
        </nav>
    );
};


const mapStateToProps = ({authedUser}) => ({
  authedUserId: authedUser.id,
  authedUserIcon: authedUser.avatarURL,
});


export default connect(mapStateToProps)(Nav);
