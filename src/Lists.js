import React, { useEffect, useState } from "react";
// import Papa, { readString, read } from 'papaparse';
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Container, Button } from "@material-ui/core";
// import api from "./api";
import axios from 'axios'

const useStyles = makeStyles({
	root:{
		// height:'300px'
	},
	box:{
		width:"2000px"
	},
	container: {
		// background: "#1e1e1e",
		// padding : "1em",
		display:'flex',
		flexWrap:'wrap',
		flexDirection :'row',
		justifyContent:'space-evenly',
	},
	ul: {
		borderRadius: "8px",
		background: "#31313A",
		display:'flex',
		padding:'1em',
		margin :"8px 0 0 0 ",
		width:'500px',
	},
	li: {
		color: "#fff",
		padding : "0 0 0 0",
		justifyContent:'center'	

	}
});

function Lists() {
	const classes = useStyles();
	const [rows, setRows] = useState([]);

	function getCombinations(start, end){

	}

	function handleClick() {
		if ( rows.length === 0 ){
			getRows(rows.length, rows.length + 20);
		}
		else{
		getRows(rows.length+1, rows.length + 19);
		}
		// getCombinations(10,20);
	}

	async function getRows(start, end) {
		await axios.get(`https://nrn-backend.herokuapp.com/listar?f=None&start=${start}&end=${end}`)
			.then(res =>  res.data.forEach(row => setRows(rows => [...rows, row])));
	}


	useEffect(() => {
	// getRows(0,20)
		console.log(rows);
		console.log(rows.length)
	}, []);

	return (
		<Container>
		<Container className={classes.box}>
		<Container className={classes.container}>
			{rows.map((row, line) => (
				<List className={classes.ul} key={line.toString()} component='div'>
					{row.map((number, column) => (
						<ListItem
							key={column.toString()}
							className={classes.li}
						// button={true}						
						>
							{number}
						</ListItem>
					))}
				</List>
			))}
		</Container>
		</Container>
			<Button onClick={handleClick}>Mostre mais!</Button>
		</Container>
	);
}

export default Lists;
