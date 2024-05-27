import React from 'react'
import './goal.css';
import { StarFilledIcon, Typography, UserAvatarIcon } from '@kds/kdsr';
export interface GoalProps {
    value: number;
    total: number;
}
const Goal = ({ value, total }: GoalProps) => {
    return (
        <div className='pu-header-goal-container'>
            <div style={{paddingRight: "8px"}}>
                <StarFilledIcon fill="#ffbf00" width='12' height='12'  />
            </div>
            <div >
                <progress className='pu-header-progress-bar' value={value} max={total}></progress>
            </div>
            <div style={{paddingLeft: "12px"}}>
                <Typography color='#258026' category="label-medium"><b>{`$ ${value}`}</b></Typography>
            </div>
            <div style={{paddingLeft: "24px", display: "flex", alignItems: "center"}}>
                <UserAvatarIcon fill="#258026" />
            </div>
        </div>
    )
}

export default Goal