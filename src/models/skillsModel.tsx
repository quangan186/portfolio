export interface SkillModel{
    skill: string,
    level: string,
}

export interface SkillsModel{
    skills: SkillModel[],
    skillType: string,
    className?: string,

}
