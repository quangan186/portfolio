import React from "react";
import { ProjectCardModel } from "../../models/projectModel";
import Image from "../utilities/image/Image";
import Text from "../utilities/text/Text";
import Title from "../utilities/text/Title";
import achievement from "../../assets/svg/achievement.svg";

const ProjectCard: React.FC<ProjectCardModel> = ({
  title,
  role,
  githubLink,
  description,
  className
}) => {
  return (
    <div className={`flex gap-4 my-8 h-[30vh] items-center relative ${className}`}>
      <Image children={achievement} className="max-w-[40px] max-h-[40px]" imgClassName="animate-bounce" />
      <span className="w-[1px] h-full bg-black"></span>
      <div className="py-4 leading-10 ">
        <Title className="!text-[20px]">{title}</Title>
        <Title className="!text-[16px]">
          (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline"
          >
            {githubLink}
          </a>
          )
        </Title>
        <Title className="!text-[16px]">Role: {role}</Title>
        <Text className="!text-[16px]">{description}</Text>
      </div>
    </div>
  );
};

export default ProjectCard;
