import React from "react"
import { useSelector } from "react-redux"
import { getCurrentAsksSizeRow, getCurrentBidsSizeRow} from "../../../orderBook"
import { TableText } from "../TableText"

type TableRowProps = {
    index: number
    textColors?: string;
    isAsk: boolean
   
}

const SizeItemComponent: React.FC<TableRowProps> = ({
    index,
    textColors = 'white',
    isAsk }): JSX.Element => {
    const size = isAsk  ?  useSelector(getCurrentAsksSizeRow(index)) : useSelector(getCurrentBidsSizeRow(index))
    return <TableText value={size}  textColors={textColors}/>
}

SizeItemComponent.displayName = 'SizeItem'

export const SizeItem = React.memo(SizeItemComponent);