import { useEffect, useState } from "react";
import axios from "axios";
import ShowJobs from "./showjobs";

function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/jobs"
        );

        console.log(response.data);
        setJobs(response.data.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchJobs();

  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Job Portal</h1>

      <ShowJobs jobs={jobs} />

    </div>
  );
}

export default App;