export interface Topic {
    id: number,
    title: string,
    userName: string
}

export interface MatchProps {
  params: any,
  isExact: boolean,
  path: string,
  url: string
}
