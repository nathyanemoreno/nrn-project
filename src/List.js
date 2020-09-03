import React, { useEffect, useState } from "react";
import { Collapse, Button, IconButton, Paper, Container, InputAdornment, OutlinedInput, AppBar, Grid } from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons"
import axios from 'axios'
import useStyles from './classes'
import Items from "./Items";

function List() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    // const [rows, setRows] = useState([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 25], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 18], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 19], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 21], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 22], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 23], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 24]])
    const [alert, setAlert] = useState("")
    const [filter, setFilter] = useState("")
    const [results, setResults] = useState(0);
    const [query, setQuery] = useState("[]")
    const [isFilter, setIsFilter] = useState(false);
    const [openResults, setOpenResults] = useState(false)

    function handleChangeInput(e) {
        (e.match(/^\D/)) ? setFilter(e.slice(0, -1)) : setFilter(e);
    }
    function handleClickRemove() {
        setFilter("");
        setIsFilter(false);
        setOpenResults(false)
    }

    function handleClickFilter() {
        setIsFilter(!isFilter);
        let newQuery = "[" + filter.split(' ').map(number => Number(number)).filter(e => e > 0 && e < 26).toString() + "]"
        setQuery(newQuery); // Create query to request
        // (query !== newQuery) ? newSearch(newQuery) : handleClickRemove()// Verify change of filter query
        // (query !== "[]") ? loadRows(query, 0, 31) : setAlert("Nada para ser filtrado."); // Make filter with query
    }

    function handleClickMore() {
        (rows.length === 0)
            ? loadRows(query, rows.length, rows.length + 31)
            : loadRows(query, rows.length + 1, rows.length + 31)
    }

    async function loadRows(query, start, end) {
        let arr = [...rows]
        let req = await axios.get(`https://nrn-backend.herokuapp.com/listar?f=${query}&start=${start}&end=${end}`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
            timeout: 60000
        }).catch(err => setAlert(err));
        if (isFilter) {
            arr.splice(0, arr.length);
            arr.push(...req.data.lists);
        } else {
            arr.push(...req.data.lists)
        }
        setResults(req.data.total)
        setRows(arr);
        setOpenResults(true);
    }


    useEffect(() => {
        loadRows(query, 0, 21)
    }, [query]);

    return (
        <Grid className={classes.grid}>
            <AppBar className={classes.appbar}>
                <Container>
                    <OutlinedInput className={classes.search}
                        onKeyPress={(e) => (e.key === 'Enter' ) ? handleClickFilter() : {}}
                        placeholder="Insira até 15 valores entre 1 e 25 com espaço"
                        variant='outlined'
                        fullWidth
                        value={filter}
                        onChange={e => handleChangeInput(e.target.value)}
                        endAdornment={
                            <InputAdornment className={classes.inputBase} >
                                {(!isFilter) ? <IconButton onClick={handleClickFilter}><Search className={classes.searchIcon} /></IconButton>
                                    : <IconButton onClick={handleClickRemove}><Clear className={classes.searchIcon} /> </IconButton>}

                            </InputAdornment>}>
                    </OutlinedInput>
                </Container>
            </AppBar>

            <Collapse style={{margin:'32px'}} in={openResults}>
                <Paper className={classes.results}>
                    Mostrando {rows.length} de {results} linhas
                   <IconButton onClick={() => setOpenResults(false)}><Clear /></IconButton>
                </Paper>
            </Collapse>

            <Items rows={rows}></Items>

            <Collapse style={{margin:'32px'}} in={openResults} >
                <Button variant='contained' className={classes.button} onClick={handleClickMore}>
                    Mostre mais!
                </Button>
            </Collapse>
        </Grid >
    );
}

export default List;
