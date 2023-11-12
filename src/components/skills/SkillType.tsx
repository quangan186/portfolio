import React from "react";
import { SkillsModel } from "../../models/skillsModel";
import Title from "../utilities/text/Title";

const SkillType: React.FC<SkillsModel> = ({ skills, skillType, className }) => {
  return (
    <div className={`w-full py-4 ${className}`}>
      <Title className="!text-[20px]">* {skillType}</Title>
      <ul className="leading-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-between gap-4">
            <li>{skill.skill}</li>
            <li className='font-semibold'>{skill.level} / 5</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SkillType;
