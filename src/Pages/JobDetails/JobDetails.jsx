import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const job = useLoaderData()
    console.log(job)
    const { category, company, company_logo, applicationDeadline, description, hr_name, hr_email, jobType, location, requirements, salaryRange, _id } = job;

    return (
        <div className="w-8/12 mx-auto my-10">
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="flex items-center">
                    <figure>
                        <img
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h3 className="text-lg font-semibold">{company}</h3>
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
                <div className="p-2">
                    <h2 className="card-title">{jobType}</h2>
                    <p>{description}</p>
                    <div className="flex gap-2 flex-wrap text-sm">
                        {
                            requirements.map((skill, i) =>
                                <p key={i} className="border">
                                    {skill}
                                </p>)
                        }
                    </div>
                    <div className=" flex items-center py-2 justify-between">
                        <p>Salary: {salaryRange.min}-{salaryRange.max}</p>
                        <Link to={`jobs/${_id}`}>
                            <button className="btn btn-primary">Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;