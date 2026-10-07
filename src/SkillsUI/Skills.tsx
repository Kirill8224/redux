import { Typography, Card, TextField, Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../skills/hooks";
import { SkillAdd, SkillDel, LearnedChange, ChangeTheme } from "../skills/skillSlise";
export function SkillsUI(){
    const Skills= useAppSelector((state)=> state.Skills.items)
    const dispath= useAppDispatch()
    const theme= useAppSelector((state)=> state.Skills.theme)
    let themeColor: 'white' | 'black'= theme === 'white' ? 'black' : 'white'
    let additem: string
    return(
    <div style={{backgroundColor: theme, color: themeColor}}>
    <Button onClick={()=>{dispath(ChangeTheme(theme === 'white' ? 'black' : 'white'))}}>{theme === 'white'? 'чёрная тема' : 'белая тема'}</Button>
    <Typography sx={{alignItems: 'center', color: themeColor}} variant="h1">SkillTracker 🚀</Typography>
    <Typography sx={{alignItems: 'center'}} variant="h5">Мои учебные навыки:</Typography>
    {Skills.map((skill, index)=><Card sx={{m: 1, backgroundColor: theme, color: themeColor}} key={index}>
        <Typography>{skill.title} {skill.isLearned ? ' ✅' : '⏳'}</Typography>
        <Button onClick={()=>{dispath(LearnedChange(skill.id))}}>{skill.isLearned ? 'не сделалл' : 'сделал'}</Button>
        <Button variant="contained" color="error" onClick={()=>{dispath(SkillDel(skill.id))}}>удалить</Button>
    </Card>)}
    <TextField  onChange={(e)=>{additem= e.target.value}} label='новый навык' placeholder="минимум 5 символов"></TextField>
    <Button variant="contained" color='success' onClick={()=>{dispath(SkillAdd(additem))}}>добавить</Button>
    </div>
    )
}


