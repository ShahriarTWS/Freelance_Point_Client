import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import loginImg from '../../assets/login.svg'
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

export const provider = new GoogleAuthProvider();
const Login = () => {
       const { signIn, loginWithGoogle, setInputEmail, inputEmail  } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: 'Login Successful!',
                    text: `Welcome back, ${user.displayName || 'User'}!`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                });
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                setError(error.code || 'Login failed');
                Swal.fire({
                    title: 'Login Failed',
                    text: error.message,
                    icon: 'error',
                    confirmButtonColor: '#d33',
                });
            });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle(provider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: 'Google Login Successful!',
                    text: `Welcome, ${user.displayName || 'User'}!`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                });
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                setError(error.code || 'Google login failed');
                Swal.fire({
                    title: 'Google Login Failed',
                    text: error.message,
                    icon: 'error',
                    confirmButtonColor: '#d33',
                });
            });
    };




    return (
        <div className='sm:flex justify-center min-h-[80vh] items-center my-4'>
            <title>Subscrify || Login</title>
            <div>
                <img className='w-3/4 mx-auto' src={loginImg} alt="" />
            </div>

            <div className="card bg-base-200 w-full max-w-md shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl py-5 text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">

                        <label className="label">Email address</label>
                        <input
                            type="email"
                            name="email"
                            // value={email} // if you're using useState for local email, bind it here
                            onChange={(e) => {
                                setInputEmail(e.target.value);
                            }}
                            required
                            className="input w-full"
                            placeholder="Enter your email address"
                        />

                        {/* <label className="label">Password</label>
                        <input type="password" name='password' required className="input w-full" placeholder="Enter your password" /> */}

                        <label className="label">Password</label>
                        <div className="relative validator">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                name='password'
                                className="input w-full pr-10"
                                placeholder="Enter your password"
                                minLength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                            />
                            <span
                                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </span>
                        </div>
                        <p className="validator-hint hidden">
                            Must be more than 6 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        <Link to={'/auth/forget-password'} state={{ email: inputEmail }}><p className="link link-hover">Forgot password?</p></Link>
                        {
                            // error && <p className='text-red-500'>{error}</p>
                        }
                        <button className="btn btn-primary mt-4">Login</button>


                    </fieldset>
                </form>
                {/* Google */}
                <div className=' px-6'>
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
                <p className='font-medium py-3 text-center'>Don’t Have An Account ? <Link className='text-red-500 hover:underline' to='/auth/signup'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;