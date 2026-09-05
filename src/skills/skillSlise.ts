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

const initialState: SkillsState= {items: [
  { id: '1', title: 'React', isLearned: true },
  { id: '2', title: 'TypeScript', isLearned: true },
  { id: '3', title: 'Node.js', isLearned: false },
  { id: '4', title: 'GraphQL', isLearned: false },
  { id: '5', title: 'Redux Toolkit', isLearned: true },
  { id: '6', title: 'Next.js', isLearned: false },
  { id: '7', title: 'Docker', isLearned: false },
  { id: '8', title: 'Git & GitHub', isLearned: true },
  { id: '9', title: 'Tailwind CSS', isLearned: true },
  { id: '10', title: 'PostgreSQL', isLearned: false }
]}

//Экшен: action.payload принимает строку (название навыка).
//Логика: Создай объект навыка (id через Date.now().toString(), title из пейлоада, isLearned: false) и добавь его в массив state.items.

export function reducer(){
  createSlice({
    name: 'addSlise',
    initialState,
    reducers: {
      addSkill: (initialState: SkillsState, payload: PayloadAction<string>)=>{
        const newitem: Skill= {id: Date.now.toString(), title: payload.payload, isLearned: false}
        initialState.items.push(newitem)
      }
    }
  })
}