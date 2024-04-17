import React from "react";
import { skillsList } from "../../constants/skills";
import SkillType from "./SkillType";
import Title from "../utilities/text/Title";
import Text from "../utilities/text/Text";

const SkillList: React.FC = () => {
  return (
    <div>
      <div className="md:flex">
        <SkillType
          skillType="Programming Language"
          skills={skillsList.programmingLanguage}
        />
        <div className="w-[1px] bg-black mx-4"></div>
        <SkillType
          skillType="Main Technologies"
          className=""
          skills={skillsList.mainTechnologies}
        />
        <div className="w-[1px] bg-black mx-4"></div>
        <SkillType
          skillType="Version Controls"
          className=""
          skills={skillsList.versionControl}
        />
      </div>

      <div className={`w-full py-4`}>
        <Title className="!text-[20px]">* {"Others"}</Title>
        <Text className="!text-[16px] font-normal">- {skillsList.others.map((skill) => skill.skill).join(", ")}</Text>
      </div>
    </div>
  );
};

export default SkillList;
