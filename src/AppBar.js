import React from 'react';


function AppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}> Busca </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppBar;