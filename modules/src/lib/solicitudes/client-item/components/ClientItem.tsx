import React from 'react'
import './clientitem.css'
import { CopyIcon, Typography } from '@kds/kdsr'
export interface ClientItemProps {
  clientItems: ClientItemListProps[]
}
export interface ClientItemListProps {
  label: string
  content: string | number
}
const ClientItem = ({ clientItems }: ClientItemProps) => {
  return (
    clientItems ?
      clientItems.map((item, index) => (
        <div className='pu-client-item-items-container' key={index}>
          <Typography category="label-small">
            {item.label}
          </Typography>
          <div className='pu-cleint-item-items-content'>
            <div>
              <Typography category="label-medium" color={index === 2 || index === 3 ? "#258026" : "#000"}>
                {item.content}
              </Typography>
            </div>

            {index === 2 || index === 3 ? <div style={{paddingLeft: "12px"}}> <CopyIcon fill="#258026" /></div> : null}
          </div>
        </div>
      ))
      : null
  )
}
export default ClientItem