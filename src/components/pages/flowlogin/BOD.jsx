import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./DOB.scss";
const DOB = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const data = [
    {
      date: 1,
      month: "January",
      years: 2020,
      value: 1,
    },
    {
      date: 2,
      month: "February",
      years: 2019,
      value: 2,
    },
    {
      date: 3,
      month: "March",
      years: 2018,
      value: 3,
    },
    {
      date: 4,
      month: "April",
      years: 2017,
      value: 4,
    },
    {
      date: 5,
      month: "May",
      years: 2016,
      value: 5,
    },
    {
      date: 6,
      month: "June",
      years: 2015,
      value: 6,
    },
    {
      date: 7,
      month: "July",
      years: 2014,
      value: 7,
    },
    {
      date: 8,
      month: "August",
      years: 2013,
      value: 8,
    },
    {
      date: 9,
      month: "Steptember",
      years: 2012,
      value: 9,
    },
    {
      date: 10,
      month: "October",
      years: 2011,
      value: 10,
    },
    {
      date: 11,
      month: "November",
      years: 2010,
      value: 11,
    },
    {
      date: 12,
      month: "December",
      years: 2009,
      value: 12,
    },
    {
      date: 13,
      years: 2008,
      value: 13,
    },
    {
      date: 14,
      years: 2007,
      value: 14,
    },

    {
      date: 15,
      years: 2006,
      value: 15,
    },
    {
      date: 16,
      years: 2005,
      value: 16,
    },
    {
      date: 17,
      years: 2004,
      value: 17,
    },
    {
      date: 18,
      years: 2003,
      value: 18,
    },
    {
      date: 19,
      years: 2002,
      value: 19,
    },
    {
      date: 20,
      years: 2001,
      value: 20,
    },

    {
      date: 21,
      years: 2000,
      value: 21,
    },
    {
      date: 22,
      years: 1999,
      value: 22,
    },
    {
      date: 23,
      years: 1998,
      value: 23,
    },

    {
      date: 24,
      years: 1997,
      value: 24,
    },
    {
      date: 25,
      years: 1996,
      value: 25,
    },
    {
      date: 26,
      years: 1995,
      value: 26,
    },
    {
      date: 27,
      years: 1994,
      value: 27,
    },
    {
      date: 28,
      years: 1993,
      value: 28,
    },
    {
      date: 29,
      years: 1992,
      value: 29,
    },
    {
      date: 30,
      years: 1991,
      value: 30,
    },
    {
      date: 31,
      years: 1980,
      value: 31,
    },
  ];

  return (
    <div className="DOB">
      <Box className="box" >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">month</InputLabel>

          <Select
            className="months"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            // sx={{width:"20rem",paddingLeft:"1rem"}}
         
            MenuProps={{
              style: {
                height: "30rem",
              },
            }}
          >
            {data.map((item, i) => (
              <MenuItem value={item.value}>{item.month}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box className="box" >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">date</InputLabel>

          <Select
            className="date"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
       
            MenuProps={{
              style: {
                height: "30rem",
              },
            }}
          >
            {data.map((item, i) => (
              <MenuItem value={item.value}>{item.date}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box className="BOB__box">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">years</InputLabel>

          <Select
            className="years"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
           
            MenuProps={{
              style: {
                height: "30rem",
              },
            }}
          >
            {data.map((item, i) => (
              <MenuItem value={item.value}>{item.years}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default DOB;
