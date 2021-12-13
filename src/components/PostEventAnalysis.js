import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Calendars from "../dummy_data/all_reference_calendars";
import FormControl from "@mui/material/FormControl";
import DropdownRow from "./DropdownRow";
import NativeSelect from "@mui/material/NativeSelect";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import DetailedTable from "./DetailedTable";
import EfficiencyMatrix from "./EfficiencyMatrix";

const style = {
  width: 200,
  height: 54,
  "margin-top": "20px",
  "margin-right": "100px",
  "font-weight": "bold",
  float: "right",
};

const tabStyle = {
  "margin-top": "30px",
  "margin-left": "50px",
  "background-color": "white",
  "overflow-x": "hidden",
  "overflow-y": "auto",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

class PostEventAnalysis extends Component {
  state = {
    referenceCalendars: Calendars,
    value: 0,
  };

  toggleTab = (event, newValue) => {
    this.setToggleState(newValue);
  };

  setToggleState(newValue) {
    this.setState({ value: newValue });
  }

  dropdownCalendars = this.state.referenceCalendars.map((cal) => {
    return <option value={cal.id}>{cal.name}</option>;
  });

  render() {
    return (
      <div>
        <div>
          <Box sx={style}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Calendar
              </InputLabel>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: "calendar",
                  id: "uncontrolled-native",
                }}
              >
                {this.dropdownCalendars}
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div>
          <DropdownRow />
        </div>
        <Box style={tabStyle}>
          <Box>
            <Tabs
              value={this.state.value}
              onChange={this.toggleTab}
              aria-label="basic tabs example"
            >
              <Tab label="Efficiency Matrix" {...a11yProps(0)} />
              <Tab label="Detailed Table" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={this.state.value} index={0}>
            <EfficiencyMatrix />
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
            <DetailedTable />
          </TabPanel>
        </Box>
      </div>
    );
  }
}

export default PostEventAnalysis;
