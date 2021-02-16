import { useState, useEffect } from "react";

import "./experience.css";

import Colossal from "./Colossal";
import Snaffle from "./Snaffle";
import Eda from "./Eda";
import Punters from "./Punters";
import Keepers from "./Keepers";

function Experience() {
  const [jobList, setJobList] = useState([
    { company: "Colossal", altName: "colossal", isActive: true },
    { company: "Enspiral Dev Academy", altName: "eda", isActive: false },
    { company: "Snaffle", altName: "snaffle", isActive: false },
    { company: "Punters.com.au", altName: "punters", isActive: false },
    { company: "Keepers", altName: "keepers", isActive: false },
  ]);

  const updateTab = (currentTab) => {
    const jobs = [...jobList];

    jobs.map((job) => {
      if (job.altName === currentTab) {
        job.isActive = true;
      } else {
        job.isActive = false;
      }
    });
    setJobList(jobs);
  };

  return (
    <section className="experience-section" id="work">
      <h2>Where I've Worked</h2>
      <div className="tabs">
        <ul>
          {jobList.map((job, i) => {
            let activeClass = " ";
            if (job.isActive) {
              activeClass = "tab-link--active";
            }

            return (
              <li key={i}>
                <a
                  className={`tab-link ${activeClass}`}
                  onClick={() => updateTab(job.altName)}
                >
                  {job.company}
                </a>
              </li>
            );
          })}
        </ul>

        <div>
          {jobList.map((job, i) => {
            if (job.altName == "colossal" && job.isActive == true) {
              return <Colossal key={i} />;
            }

            if (job.altName == "eda" && job.isActive == true) {
              return <Eda key={i} />;
            }

            if (job.altName == "snaffle" && job.isActive == true) {
              return <Snaffle key={i} />;
            }

            if (job.altName == "punters" && job.isActive == true) {
              return <Punters key={i} />;
            }

            if (job.altName == "keepers" && job.isActive == true) {
              return <Keepers key={i} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
