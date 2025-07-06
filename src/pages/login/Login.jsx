import { GraduationCap } from 'lucide-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = { email, password };
        console.log(user);

        if (email === 'admin@example.com' && password === 'admin123') {
            navigate('/');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen flex md:items-center justify-center bg-blue-50 px-4 sm:px-6">
            <div className="h-[350px] w-[400px] my-32 bg-white rounded-2xl shadow-md p-6 sm:p-8">
                <div>
                    <h2 className="text-2xl font-bold flex items-center text-gray-800 mb-4">
                        <GraduationCap color="#83bfd2" />IST
                    </h2>
                </div>
                <h4 className='text-gray-400 mb-2 font-semibold'>
                    Login to your account
                </h4>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            ref={emailRef}
                            required
                            className="w-full px-4 py-2 hover:bg-slate-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            ref={passwordRef}
                            required
                            className="w-full px-4 py-2 hover:bg-slate-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                {/* <p className="mt-4 text-center text-sm text-gray-500">
                    Demo Credentials:<br />
                    Email: <code>admin@example.com</code><br />
                    Password: <code>admin123</code>
                </p> */}
            </div>
        </div>
    );
};

export default Login;