
import React from "react";
import { Grid, ListItem, Typography } from "@material-ui/core";
import useStyles from "./classes";

function Items({ rows }) {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            {rows.map((row, line) => (
                <Grid container spacing={1} xs={12} md={3} className={classes.ul} key={line.toString()}>
                    {row.map((number, column) => (
                        <Grid item
                        xs={0}
                        // spacing={2}
                            key={column.toString()}
                            className={classes.li}
                        // button={true}						
                        >
                            <Typography variant="body1">{number}</Typography>
                        </Grid>
                    ))}
                </Grid>
            ))}
         </Grid>
    )
}

export default Items;