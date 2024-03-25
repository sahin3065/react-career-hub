import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id); 
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

  return (
    <div>
         
         <div className="grid gap-4 md:grid-cols-4">
             <div className="border md:col-span-3">
                   <h2>Details commung here</h2>
                   <h2>Job Details of: {job.job_title}</h2>
                   <p>{job.company_name}</p>
             </div>
             <div className="border">
                <h2 className="text-2xl">Side thing</h2>
                <button className="btn bg-[#7E90FE] w-full">Apply Now</button>
             </div>
         </div>
    </div>
  );
};

export default JobDetails;