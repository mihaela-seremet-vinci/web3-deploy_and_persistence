import { NavLink } from "react-router-dom";

export default function NavBar() {

    return <div>
        <NavLink to="/">Welcome</NavLink>
        <NavLink to="/add">Add 
        </NavLink>
        <NavLink to="/list">Expense List</NavLink>
    </div>
}