export interface Topic {
    id: number,
    title: string,
    userName: string,
    comments: Comment[]
}

export interface Comment {
  id: number,
  description: string,
  user: {
    id: number,
    username: string
  }
}

export interface MatchProps {
  params: any,
  isExact: boolean,
  path: string,
  url: string
}

