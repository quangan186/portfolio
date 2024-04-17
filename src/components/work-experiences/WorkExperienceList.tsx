import React from "react";
import { workExperiences } from "../../constants/work-experience";
import WorkExperience from "./WorkExperience";

const WorkExperienceList: React.FC = () => {
  return (
    <div>
      {workExperiences.map((experience, index) => {
        return (
          <WorkExperience
            key={index}
            title={experience.title}
            startTime={experience.startTime}
            endTime={experience.endTime}
            company={experience.company}
          />
        );
      })}
    </div>
  );
};

export default WorkExperienceList;
