import { initialState } from "./skills/skillSlise";
import reducerSkill from './skills/skillSlise'
import { SkillDel, SkillAdd } from "./skills/skillSlise";
import { test, expect } from 'vitest'
test('SkillAdd', ()=>{
    const action= SkillAdd('HTML/CSS')
    const res= reducerSkill(initialState, action)
    expect(res).toEqual({
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
            { id: '10', title: 'CI/CD (GitHub Actions)', isLearned: false },
            { id: '11', title: 'HTML/CSS', isLearned: false }
        ]
      })
})
test('SkillDell', ()=>{
    const action= SkillDel('React Native')
    const res= reducerSkill(initialState, action)
    expect(res).toEqual({
        items: [
          { id: '1', title: 'JavaScript (ES6+)', isLearned: true },
          { id: '2', title: 'Vue.js', isLearned: true },
          { id: '3', title: 'Nuxt.js', isLearned: false },
          { id: '4', title: 'Pinia', isLearned: true },
          { id: '6', title: 'REST API', isLearned: true },
          { id: '7', title: 'GraphQL', isLearned: false },
          { id: '8', title: 'Sass/SCSS', isLearned: true },
          { id: '9', title: 'MongoDB', isLearned: false },
          { id: '10', title: 'CI/CD (GitHub Actions)', isLearned: false }
        ]
      })
})