export interface HeroSection {
  greeting: string;
  shortDescription: string;
  fullDescription: string;
  contact: {
    text: string;
    link: string;
  };
  resume: {
    text: string;
    fileUrl: string;
  };
  avatarUrl: string;
}
