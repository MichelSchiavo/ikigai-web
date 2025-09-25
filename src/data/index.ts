import { BreathingTechnique, Oni } from '@/types';

export const breathingTechniques: BreathingTechnique[] = [
  {
    id: 'trovao',
    name: 'Respiração do Trovão',
    description: 'Velocidade divina e ataques explosivos que cortam o ar e o inimigo antes mesmo que um som seja ouvido.',
    pillar: 'Byakurei Atla',
    color: 'yellow-400',
    icon: 'fas fa-bolt'
  },
  {
    id: 'pedra',
    name: 'Respiração da Pedra',
    description: 'Técnicas defensivas e ataques devastadores com a força e resistência da rocha mais sólida.',
    pillar: 'Hikari Shimizu',
    color: 'gray-600',
    icon: 'fas fa-mountain'
  },
  {
    id: 'agua',
    name: 'Respiração da Água',
    description: 'Adaptável e fluida, permite que o espadachim se mova como a correnteza, defendendo e atacando com graça implacável.',
    pillar: 'Kaito Nagamine',
    color: 'blue-500',
    icon: 'fas fa-water'
  },
  {
    id: 'vento',
    name: 'Respiração do Vento',
    description: 'Cortes agressivos e caóticos que se assemelham a um tornado, retalhando tudo em seu caminho.',
    pillar: 'Tatsumi',
    color: 'green-500',
    icon: 'fas fa-wind'
  },
  {
    id: 'chamas',
    name: 'Respiração das Chamas',
    description: 'Ataques poderosos e avassaladores que queimam os inimigos com a força de um incêndio incontrolável.',
    pillar: 'Hime Yuuka',
    color: 'red-600',
    icon: 'fas fa-fire'
  }
];

export const onis: Oni[] = [
  {
    id: 'akaza',
    name: 'Akaza',
    title: 'Lua Superior Três',
    image: 'https://placehold.co/600x840/1A1A1A/A62639?text=Akaza'
  },
  {
    id: 'doma',
    name: 'Doma',
    title: 'Lua Superior Dois',
    image: 'https://placehold.co/600x840/1A1A1A/FFFFFF?text=Doma'
  },
  {
    id: 'kokushibo',
    name: 'Kokushibo',
    title: 'Lua Superior Um',
    image: 'https://placehold.co/600x840/1A1A1A/FFD700?text=Kokushibo'
  }
];