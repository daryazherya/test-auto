import Button from '@mui/material/Button';

const style ={ 
    backgroundColor : '#3c5663', 
    fontSize: '12px', 
    p: '0 10px'
}

const ButtonAdd = ({onAdd}) => {
    return (
        <Button 
            variant="contained" 
            sx={style}
            onClick={onAdd}
        >
            Add new object 
        </Button>
    );
}
 
export default ButtonAdd;