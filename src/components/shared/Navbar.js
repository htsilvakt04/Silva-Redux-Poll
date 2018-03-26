import React from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends React.Component {
    render () {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <NavLink exact to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard'>Leaders</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add-poll'>Add Poll</NavLink>
                    </li>
                </ul>

            </div>
        )
    }
}
export default Navbar;
