import React from "react";
import { ProjectCardModel } from "../../models/projectModel";
import Image from "../utilities/image/Image";
import Text from "../utilities/text/Text";
import Title from "../utilities/text/Title";
import achievement from "../../assets/svg/achievement.svg";

const ProjectCard: React.FC<ProjectCardModel> = ({
  id,
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
      className={`flex items-center gap-4 mt-8 relative ${className}`}
    >
      <Image
        children={achievement}
        className="max-w-[40px] max-h-[40px]"
        imgClassName="animate-bounce"
      />
      <div className="leading-10 px-8 border-l border-l-black">
        <Title className="!text-[20px]">{title}</Title>

        <div className=" flex gap-4 ">
        <Text className="!text-[16px]">
          <span className="italic">
            {role} {teamSize && `(${teamSize} people)`}{" "}
          </span>{" "}
        </Text>
        
        <Text className="!text-[16px] flex gap-4 w-fit ">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Github
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Demo
              </a>
            )}
          </Text>
        </div>
        
        <Title className="!text-[16px]">Description:</Title>
        <ul className=" list-disc">
          {description.map((des) => {
            return <li>{des}</li>;
          })}
        </ul>
        {/* <Text className="!text-[16px]">{description}</Text> */}
        <div className="flex items-baseline gap-2">
          <Title className="!text-[16px] !w-fit ">Technologies used : </Title>
          {techStacks.map((techStack: string) => {
            return <Text className="!text-[16px]">{techStack}</Text>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
