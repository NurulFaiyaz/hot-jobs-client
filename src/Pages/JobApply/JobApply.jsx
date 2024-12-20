import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../CustomHooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";


const JobApply = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { user } = useAuth()


    const submitApplication = e => {
        e.preventDefault()
        const form = e.target;

        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;
        const optional = form.optional.value;
       
        const applicant = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            gitHub,
            resume,
            optional
        }
        axios.post('http://localhost:8800/job-applications', applicant)
            .then(res => {
                const data = res.data;
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application successfully submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            })

    }

    return (
        <div className="w-9/12 mx-auto py-10">

            <div>
                <h2 className="text-center text-3xl font-bold">Apply job!</h2>
            </div>
            <div className="card bg-base-100 mx-auto max-w-lg shadow-2xl">
                <form onSubmit={submitApplication} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn</span>
                        </label>
                        <input
                            name="linkedIn"
                            type="url" placeholder="LinkedIn URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">GitHub</span>
                        </label>
                        <input
                            name="gitHub"
                            type="url" placeholder="GitHub Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume</span>
                        </label>
                        <input
                            name="resume"
                            type="url" placeholder="Resume Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Optional</span>
                        </label>
                        <input
                            name="optional"
                            type="text" placeholder="Comment" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default JobApply;