import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// 1. Чертеж одного навыка
export interface Skill {
  id: string;       // Уникальный ID (например, '1')
  title: string;    // Название (например, 'React')
  isLearned: boolean; // Статус (изучено или нет: true/false)
}
// 2. Чертеж состояния нашего слайса
interface SkillsState {
  items: Skill[];   // Внутри состояния будет объект, где лежит массив навыков
}

const initialState: SkillsState = {
  items: [
    { id: '0', title: 'JavaScript (ES6+)', isLearned: true },
    { id: '1', title: 'Vue.js', isLearned: true },
    { id: '2', title: 'Nuxt.js', isLearned: false },
    { id: '3', title: 'Pinia', isLearned: true },
    { id: '4', title: 'React Native', isLearned: false },
    { id: '5', title: 'REST API', isLearned: true },
    { id: '6', title: 'GraphQL', isLearned: false },
    { id: '7', title: 'Sass/SCSS', isLearned: true },
    { id: '8', title: 'MongoDB', isLearned: false },
    { id: '9', title: 'CI/CD (GitHub Actions)', isLearned: false }
  ]
}
export const reducerSkill=
  createSlice({
    name: 'redux',
    initialState,
    reducers: {
      SkillDel: (State: SkillsState, Payload: PayloadAction<string>)=>{
        const item: Skill | undefined= State.items.find((item)=>{item.title === Payload.payload})
        if(item){
        State.items= State.items.filter((skil)=>{skil.title != item.title})}
      }
    }
  })

  export const { SkillDel } = reducerSkill.actions; // Экспорт экшена
  export default reducerSkill.reducer;    