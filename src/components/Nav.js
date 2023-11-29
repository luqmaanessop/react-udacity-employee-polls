import { Link } from "react-router-dom";

const Nav = () => {

    const logout = (e) => {
        e.preventDefault();

        // TODO: handle logout action - dispatch something
    };
    const authedUserId = 'guy';

    return (
        <nav className="flex items-center justify-between bg-blue-500 p-4">
            <div className="flex space-x-4">
                <Link to="/" className="text-white">Home</Link>
                <Link to="/leaderboard" className="text-white">Leaderboard</Link>
                <Link to="/new" className="text-white">New Poll</Link>
            </div>
            <span className="text-white" data-testid="user-information">User: {authedUserId}</span>
            <button onClick={logout} className="text-white">Logout</button>
        </nav>
    );
};

export default Nav;
