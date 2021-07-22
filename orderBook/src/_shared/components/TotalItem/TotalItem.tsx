import React from "react"
import { useSelector } from "react-redux"
import { getCurrentAsksTotalRow, getCurrentBidsTotalRow} from "../../../orderBook"
import { TableText } from "../TableText"

type TableRowProps = {
    index: number
    textColors?: string;
    isAsk: boolean
   
}

const TotalItemComponent: React.FC<TableRowProps> = ({
    index,
    textColors = 'white',
    isAsk }): JSX.Element => {
    const total = isAsk  ? useSelector(getCurrentAsksTotalRow(index)) : useSelector(getCurrentBidsTotalRow(index))

    return <TableText value={total} textColors={textColors}/>
}

TotalItemComponent.displayName = 'TotalItem'

export const TotalItem = React.memo(TotalItemComponent);