import { Typography, Card } from "@mui/material";
import type {StoreType} from '../skills/store'
import { useSelector } from "react-redux";
export function SkillsUI(){
    const Skills= useSelector((state: StoreType)=> state.Skills.items)
    return(<>
    <Typography sx={{alignItems: 'center'}} variant="h1">SkillTracker 🚀</Typography>
    <Typography sx={{alignItems: 'center'}} variant="h5">Мои учебные навыки:</Typography>
    {Skills.map((skill, index)=><Card sx={{m: 1}} key={index}>
        <Typography>{skill.title} {skill.isLearned ? ' ✅' : '⏳'}</Typography>
    </Card>)}
    </>)
}