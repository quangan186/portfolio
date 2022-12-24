export interface ProjectModel{
    title: string,
    role: string,
    githubLink: string,
    description: string
}

export interface ProjectCardModel extends ProjectModel{
    className?: string
}