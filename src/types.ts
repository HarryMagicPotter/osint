export interface Tool {
  name: string;
  url: string;
  tags: string[];
}

export interface ToolDatabase {
  [category: string]: Tool[];
}

export interface SecurityCommand {
  id: number;
  command: string;
  description: string;
  category: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  url: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}

export interface OSINTResource {
  name: string;
  url: string;
  description: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}
