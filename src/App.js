import React, { useEffect, useState } from 'react';
import { TextField, Container } from '@material-ui/core'
// import Lists from './Lists';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState("");

  function handleChangeInput(e) {
    let d = ["10", "12", "13", "14", "15"]
    let arr1 = e.split('')

    let last = e.slice(-1)
    let secLast = e.slice(-2, -1)

    let lastXY = e.slice(-2)
    let secLastXY = e.slice(-3, -1)

    const splitInIntervals = (start, interval) => {
      let array = []
      let lastXY = ""
      for (let i = start; i < e.length - 1; i++) {
        lastXY = e.slice(i, i + interval)
        array.push(lastXY)
        i += 1
      }
      return array;
    }

    let arr2 = splitInIntervals(0, 2)
    let arr3 = splitInIntervals(1, 2)

    setInputNumber(e)

    const checkNumbers = (a, b) => (
      !a
        ? {}
        : b
          ? setInputNumber(e)
          : setInputNumber(e.slice(0, -1))
    );

    const Count = (number, array) => { return array.filter(n => n === number).length }

    // if (d.includes(lastXY)) {
    //   if ( Count(lastXY, arr2) < 3 ){
    //     console.log(1)
    //     setInputNumber(e)
    //   }
    //   else {
    //     console.log(2)
    //     setInputNumber(e.slice(0, -1))
    //   }
    // }

    checkNumbers(d.includes(lastXY), Count(lastXY, arr2) < 3)

    if (Count(last, arr1) > 1) {
      if (last === "1" && Count("1", arr1) <= 8) {
        if (e.match(/1{1,2}[^\D1]*1[\^D6789]1[^\D]/) || e.match(/11111/) || e.match(/1111[^\D1]*11/)
          // || e.match(/1[^\D]/)
          // || last === "0"
        ) {
          console.log(3)
          setInputNumber(e.slice(0, -1))
        } else {
          if (e.replace(arr3.join(""), '') === "11") {
            console.log(e.replace(arr3.join(""), '') === "1");
            checkNumbers(d.includes(secLastXY), Count(secLastXY, arr3) < 1)
          }
          else {
            console.log(e.replace(arr3.join(""), '') === "1");
            checkNumbers(d.includes(secLastXY), Count(secLastXY, arr3) < 2)
          }
          // setInputNumber(e)
        }
      } else {
        if ((Count(last, arr1) > 1 &&
          (last.match(/[6-9]|0/) || secLast !== "1"))

          || Count("1", arr1) > 8
        ) {
          setInputNumber(e.slice(0, -1))
        }
      }
    } else {
      if (last === "0" && secLast !== "1") {
        setInputNumber(e.slice(0, -1))
      } else {
        setInputNumber(e)
      }
    }
  }

  useEffect(() => {
  }, [inputNumber])
  return (
    <Container>
      <TextField
        fullWidth variant='filled' placeholder="Insira número" label="Número"
        style={{ margin: 16 }}
        value={inputNumber}
        onChange={e => handleChangeInput(e.target.value)} >

      </TextField>
      {inputNumber}
      {/* <Lists></Lists> */}
    </Container>
  );
}

export default App;
