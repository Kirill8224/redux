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

export const initialState: SkillsState = {
  items: [
    { id: '1', title: 'JavaScript (ES6+)', isLearned: true },
    { id: '2', title: 'Vue.js', isLearned: true },
    { id: '3', title: 'Nuxt.js', isLearned: false },
    { id: '4', title: 'Pinia', isLearned: true },
    { id: '5', title: 'React Native', isLearned: false },
    { id: '6', title: 'REST API', isLearned: true },
    { id: '7', title: 'GraphQL', isLearned: false },
    { id: '8', title: 'Sass/SCSS', isLearned: true },
    { id: '9', title: 'MongoDB', isLearned: false },
    { id: '10', title: 'CI/CD (GitHub Actions)', isLearned: false }
  ],
  theme: 'white'
}

