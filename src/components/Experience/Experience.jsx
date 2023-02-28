import { useState } from "react";

import Colossal from "./Colossal";
import Snaffle from "./Snaffle";
import Eda from "./Eda";
import Punters from "./Punters";
import Keepers from "./Keepers";
import AskYourTeam from "./AskYourTeam";

import "./experience.css";

const Experience = () => {
  const [jobList, setJobList] = useState([
    { company: "AskYourTeam", altName: "ayt", isActive: true },
    { company: "Colossal", altName: "colossal", isActive: false },
    { company: "Dev Academy", altName: "eda", isActive: false },
    { company: "Snaffle", altName: "snaffle", isActive: false },
    { company: "Punters.com.au", altName: "punters", isActive: false },
  ]);

  const updateTab = (currentTab) => {
    const jobs = [...jobList];

    jobs.map((job) => {
      return job.altName === currentTab
        ? job.isActive = true
        : job.isActive = false;
    });

    setJobList(jobs);
  };

  return (
    <section className="experience-section" id="work">
      <h2>Where I've Worked</h2>
      <div className="tabs">
        <ul className="tab-list">
          {jobList.map((job, i) => {
            const activeClass = job.isActive ? "tab-link--active" : "";

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

        {jobList.map((job) => {
          if (job.altName === "ayt" && job.isActive) return <AskYourTeam key={job.altName} />

          if (job.altName === "colossal" && job.isActive) return <Colossal key={job.altName} />

          if (job.altName === "eda" && job.isActive) return <Eda key={job.altName} />

          if (job.altName === "snaffle" && job.isActive) return <Snaffle key={job.altName} />

          if (job.altName === "punters" && job.isActive) return <Punters key={job.altName} />

          if (job.altName === "keepers" && job.isActive) return <Keepers key={job.altName} />
        })}

      </div>
    </section>
  );
}

export default Experience;
