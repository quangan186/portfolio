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
  className,
  demo,
  techStacks,
  teamSize,
}) => {
  return (
    <div
      className={`flex gap-4 my-8 h-[30vh] items-center relative ${className}`}
    >
      <Image
        children={achievement}
        className="max-w-[40px] max-h-[40px]"
        imgClassName="animate-bounce"
      />
      <span className="w-[1px] h-full bg-black"></span>
      <div className="py-4 leading-10 ">
        <Title className="!text-[20px]">{title}</Title>
        <Title className="!text-[16px]">
          Github repo:{" "}
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:underline"
          >
            {githubLink}
          </a>
        </Title>
        {demo ? (
          <Title className="!text-[16px]">
            Demo:{" "}
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:underline"
            >
              {demo}
            </a>
          </Title>
        ) : (
          <Title className="!text-[16px] flex gap-2">Teamsize: <Text className="!text-[16px] !font-normal">{teamSize}</Text></Title>
        )}
        <Title className="!text-[16px]">Role: {role}</Title>
        <Text className="!text-[16px]">{description}</Text>
        <div className="flex items-baseline gap-2">
          <Title className="!text-[16px] w-fit ">Technologies used : </Title>
          {techStacks.map((techStack: string) => {
            return <Text className="!text-[16px]">{techStack}</Text>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
