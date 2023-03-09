export interface ProjectModel{
    title: string,
    demo?: string,
    teamSize?: number
    role: string,
    githubLink: string,
    description: string,
    techStacks: string[]
}

export interface ProjectCardModel extends ProjectModel{
    className?: string
}