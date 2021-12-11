import React, { useState } from "react";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Moment from "moment";

const style = {
  width: 600,
  height: 350,
  color: "black",
  "background-color": "#f5f5f5",
  border: "2px solid #000",
  "box-shadow": "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  p: 2,
  px: 4,
  pb: 3,
};

const buttonStyle = {
  width: "533px",
  "background-color": "#104d23",
  "font-size": "15px",
  color: "#f5f5f5",
  "margin-top": "50px",
  "border-radius": "4px",
  "box-shadow": "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};

const AddCalendarForm = ({ addCalendar }) => {
  const [name, setName] = useState("");
  const [last_edited, setLastEdited] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || last_edited === "") {
      alert("Please enter all the fields in the form!");
    } else {
      addCalendar(name, last_edited);
      setName("");
      setLastEdited("");
    }
  };
  return (
    <div>
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <input
            name="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="datetime-local"
            name="Start Date"
            value={last_edited}
            onChange={(e) =>
              setLastEdited(Moment(e.target.value).format("HH:mm DD/M/YYYY"))
            }
          />
          <FormLabel style={{ "padding-top": "15px" }} component="legend">
            Status
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked disabled  value="Processed" />}
              label="Processed"
            />
          </FormGroup>
          <input
            type="submit"
            className="button1"
            value="OPTIMIZE"
            style={buttonStyle}
          />
        </form>
      </Box>
    </div>
  );
};

export default AddCalendarForm;
