export interface ResumeData {
  languages: LanugageData;
  frameworks: string[];
  technologies: string[];
}

export interface LanugageData {
  proficient: string[];
  familar: string[];
  previouslyUsed: string[];
}
