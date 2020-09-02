import React, { Container } from 'react'
import { IconButton, Typography } from '@material-ui/core'
import useStyles from './classes'


function ToggleButton({ buttons, filter }) {
    const classes = useStyles();
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

    function handleAddFilter(e) {
        let arr = [...filter].push(Number(e))
        setFilter(arr)
    }

    function handleRemoveFilter(e) {
        let arr = [...filter].pop(e)
        setFilter(arr)
    }

    <Container className={classes.container}>
        {buttons.map((number, index) =>
            (filter.includes(number))
                ? <IconButton key={index} onClick={handleAddFilter(index)}>
                    <Typography variant="button" className={classes.searchIcon}> {number}</Typography>
                </IconButton>
                : <IconButton key={index} onClick={handleRemoveFilter(index)}>
                    <Typography variant="button" className={classes.searchIcon}> {number}</Typography>
                </IconButton>
        )
        }
    </Container>
}

export default ToggleButton;