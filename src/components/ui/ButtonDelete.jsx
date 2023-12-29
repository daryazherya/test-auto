import Button from "@mui/material/Button";

const sx = {
    backgroundColor: "#3c5663",
    fontSize: "12px",
    p: "2px 12px",
};

const ButtonDelete = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            sx={sx}
            onClick={onClick}
        >
            Delete
        </Button>
    );
};

export default ButtonDelete;
