/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import User from '../../models/user';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationService from '../../services/authentication.service';
import { setCurrentUser } from "../../store/actions/user";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () =>{
    const[user, setUser] = useState(new User('','',''));
    const[loading, setLoading]= useState(false);
    const[submitted, setSubmitted] = useState(false);
    const[errorMessage, setErrorMessage]=useState('');

    const currentUser = useSelector(state=>state.user);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
        if(currentUser?.id){
            navigate('/profile');
        }
    }, []);
    

    const handleChange = (e) => {
       
        const{name, value} = e.target;
        setUser((prevState=>{
            return{
                ...prevState,
                [name]: value
            };
        }));
    }

    const handleLogin =(e) => {
        e.preventDefault();

        setSubmitted(true);
        if(!user.username || !user.password)
        {
            return;
        }

        setLoading(true);

        AuthenticationService.login(user).then(response =>{
            // set user in session
            dispatch(setCurrentUser(response.data));
            navigate('/home')

        }).catch(error=>{
            console.log(error);
            setErrorMessage('username or password is invalid');
            setLoading(false);
        })
    };
    return(
        <div className="container mt-5">
            <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
                <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon"/>
                {errorMessage &&
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
                }
                <form 
                onSubmit={(e)=> handleLogin(e)}
                noValidate
                className={submitted? 'was-validated': ''}
                >
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input 
                        type="text" 
                        name="username"
                        placeholder="username"
                        value={user.username}
                        className="form-control" 
                        onChange={(e)=>handleChange(e)}
                        required
                        />
                        <div className="invalid-feedback">
                            Username is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input 
                        type="password" 
                        name="password"
                        placeholder="password"
                        value={user.password}
                        className="form-control" 
                        onChange={(e)=>handleChange(e)}
                        required
                        />
                        <div className="invalid-feedback">
                            Password is required.
                        </div>
                    </div>

                    <button 
                        className="btn btn-info w-100 mt-3"
                        disabled={loading}
                        >
                        Login
                    </button>

                </form>
                <Link to="/register" className="btn btn-link" style={{color: 'darkgray'}}>
                    Creat A new Account!
                </Link>
            </div>
        </div>
    );
};

export {LoginPage};