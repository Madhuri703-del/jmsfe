function ShowJobs({ jobs }) {

  return (

    <div>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        width="100%"
      >

        <thead>

          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Job Type</th>
            <th>Experience</th>
            <th>Description</th>
            <th>Skills</th>
          </tr>

        </thead>

        <tbody>

          {jobs.map((job, index) => (

            <tr key={index}>

              <td>{job.title}</td>

              <td>{job.companyName}</td>

              <td>{job.location}</td>

              <td>{job.salary}</td>

              <td>{job.jobType}</td>

              <td>{job.experience}</td>

              <td>{job.description}</td>

              <td>{job.skills.join(", ")}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default ShowJobs;