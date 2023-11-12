export interface SkillModel{
    skill: string,
    level: number,
}

export interface SkillsModel{
    skills: SkillModel[],
    skillType: string,
    className?: string,

}
