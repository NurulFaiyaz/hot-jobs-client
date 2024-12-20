import { useEffect, useState } from "react";
import useAuth from "../../CustomHooks/UseAuth";

const MyApplications = () => {

    const { user } = useAuth()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8800/job-applications?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])

    return (
        <div className="w-9/12 mx-auto py-10">
            <h2 className="3xl">My Applications: {jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Company</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <tr key={job._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                
                                    <span className="badge badge-ghost badge-sm">{job.title}</span>
                                </td>
                                <td>{job.category}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{job.jobType}</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyApplications;