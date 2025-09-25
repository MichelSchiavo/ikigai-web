export interface BreathingTechnique {
  id: string;
  name: string;
  description: string;
  pillar?: string;
  user?: string;
  color: string;
  icon: string;
}

export interface Oni {
  id: string;
  name: string;
  title: string;
  image: string;
}