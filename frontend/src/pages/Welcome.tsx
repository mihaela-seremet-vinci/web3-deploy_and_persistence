import { NavLink } from "react-router-dom";

export default function Welcome() {
    return (
        <div>
            <h1>Welcome Page</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/list">List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add">Add</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}