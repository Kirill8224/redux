import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// 1. Чертеж одного навыка
export interface Skill {
  id: string;       // Уникальный ID (например, '1')
  title: string;    // Название (например, 'React')
  isLearned: boolean; // Статус (изучено или нет: true/false)
}
// 2. Чертеж состояния нашего слайса
export interface SkillsState {
  items: Skill[];   // Внутри состояния будет объект, где лежит массив навыков
}

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
  ]
}
export const reducerSkill=
  createSlice({
    name: 'redux',
    initialState,
    reducers: {
      SkillDel: (State: SkillsState, Payload: PayloadAction<string>)=>{
        if(Payload.payload){ State.items= State.items.filter((skil)=>{return skil.id != Payload.payload})}
      },
      SkillAdd: (State: SkillsState, Payload: PayloadAction<string>)=>{
        if(Payload.payload && Payload.payload.length > 4){
        const item: Skill= {id: String(Date.now()), title: Payload.payload, isLearned: false}
        State.items= [...State.items, item]}
      }, 
      LearnedChange: (State: SkillsState, action: PayloadAction<string>)=>{
        const item= State.items.find((skill)=> skill.id === action.payload)
        if(item){
        item.isLearned= !item.isLearned}
    }}
  })

export default reducerSkill.reducer
export const {SkillDel, SkillAdd, LearnedChange} = reducerSkill.actions