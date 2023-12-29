import { TextField } from "@mui/material";

const SearchBar = ({value, setValue}) => {

    return (
        <TextField 
            label="Search.." 
            value={value} 
            onChange={
            (e)=> setValue(e.target.value)}
        />)
}
 
export default SearchBar;