

const JobCard = ({ job }) => {

    const { category, company, company_logo, applicationDeadline, description, hr_name, hr_email, jobType, location, requirements, salaryRange} = job;
    console.log(job)
    return (
        <div className=" mx-auto">
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
                            requirements.map(skill =>
                                <p className="border">
                                    {skill}
                                </p>)
                        }
                    </div>
                    <div className=" flex items-center py-2 justify-between">
                        <p>Salary: {salaryRange.min}-{salaryRange.max}</p>
                        <button className="btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;