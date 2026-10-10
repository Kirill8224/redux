export interface Skill {
    id: string;       // Уникальный ID (например, '1')
    title: string;    // Название (например, 'React')
    isLearned: boolean; // Статус (изучено или нет: true/false)
  }
  // 2. Чертеж состояния нашего слайса
  export interface SkillsState {
    items: Skill[];
    theme: Theme
  }
  export type Theme= 'black' | 'white'
  