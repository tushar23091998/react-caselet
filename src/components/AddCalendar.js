import React, { useState } from "react";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Moment from "moment";
import NativeSelect from "@mui/material/NativeSelect";
import * as BiIcons from "react-icons/bi";
import { Button } from "@mui/material";

const style = {
  width: 500,
  height: 450,
  color: "black",
  "background-color": "#f5f5f5",
  border: "2px solid #000",
  "box-shadow": "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  "overflow-y": "auto",
  p: 2,
  px: 4,
  pb: 3,
};

const buttonStyle = {
  width: "433px",
  "background-color": "#104d23",
  "font-size": "15px",
  color: "#f5f5f5",
  "margin-top": "15px",
  "border-radius": "4px",
  "box-shadow": "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};
const smallButtonStyle = {
  width: "233px",
  height: "25px",
  "background-color": "#104d23",
  "font-size": "12px",
  color: "#f5f5f5",
  "margin-top": "15px",
  "margin-bottom": "15px",
  "margin-left": "50px",
  "border-radius": "4px",
  "box-shadow": "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};

const formTextStyle = {
  color: "#104d23",
  "font-weight": "bold",
  "padding-top": "15px",
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
              control={<Checkbox defaultChecked disabled value="Processed" />}
              label="Processed"
            />
          </FormGroup>
          <div>
            Number of Weeks{" "}
            <input
              type="text"
              style={{
                width: "250px",
                "margin-left": "40px",
                "text-align": "right",
              }}
              name=""
            />
          </div>
          <FormLabel style={formTextStyle} component="legend">
            CPG GOALS
          </FormLabel>

          <FormControl component="fieldset">
            <FormLabel style={{ "padding-top": "15px" }} component="legend">
              Optimization Goal
            </FormLabel>
            <RadioGroup row defaultValue="sales" name="radio-buttons-group">
              <FormControlLabel
                value="sales"
                control={<Radio />}
                label="Sales"
              />
              <FormControlLabel
                value="profit"
                control={<Radio />}
                label="Profit"
              />
            </RadioGroup>
          </FormControl>
          <FormLabel style={formTextStyle} component="legend">
            Business Constraints
          </FormLabel>
          <div style={{ "padding-top": "15px" }}>
            CPG Market Share{" "}
            <input
              type="text"
              style={{
                width: "250px",
                "margin-left": "40px",
                "text-align": "right",
              }}
              name="PP"
              placeholder="PP"
            />
          </div>
          <div style={{ "padding-top": "15px" }}>
            Disruption Level
            <NativeSelect
              style={{
                width: "250px",
                "margin-left": "57px",
                "text-align": "right",
              }}
              defaultValue={10}
            >
              <option value={10}>High</option>
              <option value={20}>Low</option>
            </NativeSelect>
          </div>
          <div style={{ "padding-top": "15px" }}>
            Promo Constraints'
            <Button style={smallButtonStyle}>
              <BiIcons.BiCloudUpload /> UPLOAD
            </Button>
          </div>
          <div>
            Locked Promo Slot
            <Button style={smallButtonStyle}>
              <BiIcons.BiCloudUpload /> UPLOAD
            </Button>
          </div>
          <div style={{ "padding-top": "15px" }}>
            <span >Each brandline is on promo at least once per week </span> <BiIcons.BiCheckbox style={{ 'margin-left': '53px' }} size={25} />
          </div>
          <div style={{ "padding-top": "15px" }}>
            <span >Info on other applied contraints </span> <BiIcons.BiInfoCircle style={{ 'margin-left': '180px' }} size={20} />
          </div>
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
