import React, { useEffect, useState } from 'react'
import './tabs.css'
import { Typography } from '@kds/kdsr';
export interface TabsProps {
    TabsItems: TabsItemsProps[];
}
export interface TabsItemsProps {
    title: string;
    link?: string;
    badge?: string;
}
const Tabs = ({ TabsItems }: TabsProps) => {
    const [activeItem, setActiveItem] = useState({ active: false, index: 0 })
    const handleClick = (index: number) => {
        setActiveItem({ active: true, index: index })
    }
    return (
        <div className='pu-header-tabs-container'>
            {
                TabsItems.map((item, index) => {
                    return (
                        <div className='pu-header-tabs-item' key={index} onClick={() => handleClick(index)}>
                            <div className='pu-header-tabs-title'>
                                <Typography color={activeItem.index === index ? "#258026" : "#7e7f80"} category="label-large">{item.title}</Typography>
                                {
                                    item.badge && <div className='pu-header-tabs-badge'>
                                        <Typography color='#fff' category="label-large">{item.badge}</Typography>
                                    </div>
                                }
                            </div>
                            {activeItem.index === index && <div className='pu-header-tabs-tab'></div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tabs