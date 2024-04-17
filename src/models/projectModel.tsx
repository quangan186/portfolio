export interface ProjectModel{
    id: number,
    title: string,
    demo?: string,
    teamSize?: number
    role: string,
    githubLink?: string,
    description: string[],
    techStacks: string[]
}

export interface ProjectCardModel extends ProjectModel{
    className?: string
}