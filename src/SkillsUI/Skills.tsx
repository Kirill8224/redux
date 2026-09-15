import { Typography, Card, TextField, Button } from "@mui/material";
import type {StoreType} from '../skills/store'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SkillAdd } from "../skills/skillSlise";
export function SkillsUI(){
    const Skills= useSelector((state: StoreType)=> state.Skills.items)
    const dispath= useDispatch()
    let additem: string
    return(<>
    <Typography sx={{alignItems: 'center'}} variant="h1">SkillTracker 🚀</Typography>
    <Typography sx={{alignItems: 'center'}} variant="h5">Мои учебные навыки:</Typography>
    {Skills.map((skill, index)=><Card sx={{m: 1}} key={index}>
        <Typography>{skill.title} {skill.isLearned ? ' ✅' : '⏳'}</Typography>
    </Card>)}
    <TextField onChange={(e)=>{additem= e.target.value}} label='новый навык' placeholder="печатайте"></TextField>
    <Button onClick={()=>{dispath(SkillAdd(additem))}}>добавить</Button>
    </>)
}


