
import React from "react";
import { Grid, ListItem, Typography } from "@material-ui/core";
import useStyles from "./classes";

function Items({ rows }) {
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.container}>
            {rows.map((row, line) => (
                <Grid item  xs={12} md={3} className={classes.ul} key={line.toString()} component='div'>
                    {row.map((number, column) => (
                        <ListItem item
                            key={column.toString()}
                            className={classes.li}
                        // button={true}						
                        >
                            <Typography variant="body1">{number}</Typography>
                        </ListItem>
                    ))}
                </Grid>
            ))}
         </Grid>
    )
}

export default Items;