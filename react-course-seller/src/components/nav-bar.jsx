/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import { clearCurrentUser } from '../store/actions/user';
import { Role } from '../models/role'

const NavBar = () =>{
    const currentUser = useSelector(state=> state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout =()=>{
        dispatch(clearCurrentUser());
        navigate('/login');
    };
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="https://reactjs.org" className="navbar-brand ms-1">
            <img src={logo} className="App-logo" alt="logo" />
            React
            </a>
            <div className="navbar-nav me-auto">
                {currentUser?.role === Role.ADMIN &&
                <>
                    <li className="nav-item">
                        <NavLink to='/admin' className="nav-link">Admin</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/users' className="nav-link">Users</NavLink>
                    </li>
                </>
                }
                <li className="nav-item">
                    <NavLink to="/home" className="nav-link">
                        Home
                    </NavLink>
                </li>
            </div>

            {!currentUser && 
                  <div className="navbar-nav ms-auto">
                  <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                  </li>
              </div>
            }

            {currentUser && 
                  <div className="navbar-nav ms-auto">
                  <li className="nav-item">
                      <NavLink to="/profile" className="nav-link">
                        {currentUser.name}
                      </NavLink>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link" onClick={()=> logout()}>
                        Logout
                    </a>
                  </li>
              </div>
            }
        </nav>
    );
};

export {NavBar};