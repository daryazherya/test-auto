import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const pages = [
    {link: '', name: 'Home'}, 
    {link: 'devices', name: 'Devices'}
];

const iconStyles = { 
    p: 0, 
    border:'1px solid #597186'
};

const pagesStyle = { 
    my: 1, 
    color: ' #d2ecf7', 
    display: 'block',
    mr: '15px'
};

const boxStyle = { 
    flexGrow: 1,
    display: { md: 'flex' } 
};

const containerStyle = {
    backgroundColor: '#768bab',
    borderRadius:'5px',
    border: '1px solid #597186',
    boxShadow: '2px 2px 8px 4px #3c5663'
};



const AppBar = () => {

    return (
    <Container maxWidth="xl" 
        sx={containerStyle}
        >
        <Toolbar disableGutters>
            <Box sx={boxStyle}
            >
                {pages.map((obj) => (
                    <Button
                        key={obj.name}
                        sx={pagesStyle}
                        href={`/${obj.link}`}
                    >
                        {obj.name}
                    </Button>
                ))}
            </Box>
            <Box>
                <IconButton 
                sx={iconStyles}
                >
                    <Avatar alt="Photo"/>
                </IconButton>
            </Box>
        </Toolbar>
    </Container>
  );
}

export default AppBar;