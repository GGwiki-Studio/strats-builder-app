export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  votes: number;
  comments: number;
  time: string;
  game?: string;        // New: which game
  category?: string;    // New: build, PvP, speedrun, etc.
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';  // New
}

export interface PostListProps {
  posts: Post[];
}

export interface PostCardProps {
  post: Post;
}

export interface VoteButtonsProps {
  votes: number;
}