import { SkillModel } from "../models/skillsModel";

export const skillsList: {
  frontend: SkillModel[];
  backend: SkillModel[];
  others: SkillModel[];
} = {
  frontend: [
    { skill: "HTML/CSS/JavaScript", level: "Experienced" },
    { skill: "React.js", level: "Experienced" },
    { skill: "Tailwind CSS", level: "Experienced" },
    { skill: "Swift UI", level: "Beginner" },
    { skill: "TypeScript", level: "Beginner" },
  ],
  backend: [
    { skill: "Node.js", level: "Beginner" },
    { skill: "Express.js", level: "Beginner" },
  ],
  others: [
    { skill: "PHP", level: "Beginner" },
    { skill: "MongoDB", level: "Beginner" },
    { skill: "MySQL", level: "Beginner" },
    { skill: "Git", level: "Skillful" },
    { skill: "Python", level: "Beginner" },
    { skill: "Java", level: "Skillful" },
    { skill: "Swift", level: "Beginner" },
    { skill: "Figma", level: "Skillful" },
  ],
};
