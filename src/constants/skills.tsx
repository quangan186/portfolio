import { SkillModel } from "../models/skillsModel";

export const skillsList: {
  frontend: SkillModel[];
  backend: SkillModel[];
  others: SkillModel[];
} = {
  frontend: [
    { skill: "HTML/CSS/JavaScript", level: 4 },
    { skill: "ReactJs", level: 4 },
    { skill: "Tailwind CSS", level: 4 },
    { skill: "NextJs", level: 4},
    { skill: "SCSS / SASS", level: 4},
    { skill: "Typescript", level: 2 },
    { skill: "Swift UI", level: 2 },
  ],
  backend: [
    { skill: "NodeJs", level: 2 },
    { skill: "ExpressJs", level: 2 },
  ],
  others: [
    { skill: "Git", level: 3 },
    { skill: "Java", level: 3 },
    { skill: "Figma", level: 3 },
    { skill: "AWS", level: 3 },
    { skill: "Scrum", level: 3 },
    { skill: "Agile methodology", level: 3 }, 
    { skill: "REST API", level: 3 }, 
    { skill: "Algorithm and Data Structure", level: 2 },
    { skill: "Swift", level: 2 },
    { skill: "Python", level: 2 },
    { skill: "PHP", level: 2 },
    { skill: "OOP", level: 2 }, 
    { skill: "MongoDB", level: 1 },
    { skill: "MySQL", level: 1 },
  ],
};
