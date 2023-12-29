import ButtonDelete from "../ui/ButtonDelete";

const TableRows = ({data, onRemove, value}) => {
    
    const tableStyle = {
        padding: '8px', 
        lineHeight: '1.5', 
        display: 'flex', 
        justifyContent:'space-between'
    };
    const cellStyle = {
        padding: '8px', 
        textAlign: 'center'
    };

    return data.filter(obj => obj.uniqueId.slice(0, value.length) === value)
    .map((obj) => {
        return <tr key={obj.uniqueId}>
            <td style={cellStyle}>
                {obj.id}
            </td>
            <td style={cellStyle}>
                {obj.uniqueId}
            </td>
            <td style={cellStyle}>
                {obj.name}
            </td>
            <td style={cellStyle}>
                {obj.status}
            </td>
            <td style={tableStyle}>
                {obj.lastUpdate}
                <ButtonDelete onClick={() => onRemove(obj.uniqueId)}/>
            </td>
        </tr>
    })
}
 
export default TableRows;