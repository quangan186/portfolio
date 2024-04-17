import { SkillModel } from "../models/skillsModel";

export const skillsList: {
  programmingLanguage: SkillModel[];
  mainTechnologies: SkillModel[];
  versionControl: SkillModel[];
  others: SkillModel[];
} = {
  programmingLanguage: [
    { skill: "JavaScript", level: 4 },
    { skill: "Java", level: 3 },
    { skill: "Typescript", level: 3 },
  ],
  mainTechnologies: [
    { skill: "HTML/CSS/JavaScript", level: 4 },
    { skill: "ReactJs", level: 4 },
    { skill: "React Native", level: 3 },
    { skill: "REST API", level: 3 }, 
    { skill: "Tailwind CSS", level: 4 },
  ],
  versionControl: [
    { skill: "Git", level: 3 },
  ],
  others: [
    { skill: "NextJs", level: 2},
    { skill: "SCSS / SASS", level: 4},
    { skill: "Figma", level: 3 },
    { skill: "AWS", level: 3 },
    { skill: "Scrum", level: 3 },
    { skill: "Agile methodology", level: 3 }, 
    { skill: "Algorithm and Data Structure", level: 2 },
    { skill: "Swift", level: 2 },
    { skill: "Swift UI", level: 2 },
    { skill: "Python", level: 2 },
    { skill: "PHP", level: 2 },
    { skill: "OOP", level: 2 }, 
    { skill: "MongoDB", level: 1 },
    { skill: "MySQL", level: 1 },
    { skill: "NodeJs", level: 2 },
    { skill: "ExpressJs", level: 2 },
  ],
};
