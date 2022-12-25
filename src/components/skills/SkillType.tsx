import React from "react";
import { SkillsModel } from "../../models/skillsModel";
import Title from "../utilities/text/Title";

const SkillType: React.FC<SkillsModel> = ({ skills, skillType }) => {
  return (
    <div className="w-full py-4">
      <Title className="!text-[20px]">* {skillType}</Title>
      <ul className="leading-10">
        {skills.map((skill, index) => (
          <div className="flex justify-between gap-4">
            <li key={index}>{skill.skill}</li>
            <li key={index} className='font-semibold'>({skill.level})</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SkillType;
