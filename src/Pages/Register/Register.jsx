
import Lottie from 'lottie-react';
import registerLottie from '../../assets/Lottie/registerLottie.json'
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';


const Register = () => {

    const {createUser} = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(err =>{
            console.log(err)
        })
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2 text-center lg:text-left">
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mx-auto pt-8 text-5xl font-bold">Register</h1>

                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="name"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder="password"
                                className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;