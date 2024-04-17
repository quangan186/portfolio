import React from "react";
import Text from "../utilities/text/Text";
import Title from "../utilities/text/Title";

type EducationModel = {
  title: string;
  startTime: string;
  endTime: string;
  company: string;
};
const WorkExperience: React.FC<EducationModel> = ({
  title,
  startTime,
  endTime,
  company,
}) => {
  return (
    <div className="py-4">
      <div className="flex gap-4">
        <Title className="!text-[20px]">{title}</Title>
        {/* <Title className="!text-[20px] text-right">{company}</Title> */}
      </div>
      <div className="flex justify-between">
        <Text className="!text-[16px] py-4">{company}</Text>
        <Text className="!text-[16px] py-4">
          {startTime} - {endTime}
        </Text>
      </div>
      {/* <a
        href={testamur}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:underline flex gap-4 "
      >
        Link to my testamur
      </a> */}
    </div>
  );
};

export default WorkExperience;
