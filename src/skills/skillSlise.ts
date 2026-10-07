import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {initialState} from './dall'
import type { SkillsState, Skill } from './dall';
// 1. Чертеж одного навыка
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
        item.isLearned= !item.isLearned}},
      ChangeTheme: (State: SkillsState, action: PayloadAction<'black' | 'white'>)=>{
        State.theme= action.payload
      }
      }
  })

export default reducerSkill.reducer
export const {SkillDel, SkillAdd, LearnedChange, ChangeTheme} = reducerSkill.actions