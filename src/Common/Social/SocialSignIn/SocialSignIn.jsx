import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";


const SocialSignIn = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(err => {
                console.log(err.massage)
            })
    }

    return (
        <div className="w-9/12 mx-auto">
            <button onClick={handleGoogleSignIn} className="btn btn-block text-xl"><FcGoogle />Google</button>
        </div>
    );
};

export default SocialSignIn;