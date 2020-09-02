
import React from "react";
import { List, ListItem, Container, Typography } from "@material-ui/core";
import useStyles from "./classes";

function Items({ rows }) {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            {rows.map((row, line) => (
                <List className={classes.ul} key={line.toString()} component='div'>
                    {row.map((number, column) => (
                        <ListItem
                            key={column.toString()}
                            className={classes.li}
                        // button={true}						
                        >
                            <Typography variant="body1">{number}</Typography>
                        </ListItem>
                    ))}
                </List>
            ))}
        </Container>
    )
}

export default Items;