import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./CalendarOptimization.css";
import Calendars from "../../dummy_data/all_calendars.json";
import * as BiIcons from "react-icons/bi";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import AddCalendarForm from "../../components/AddCalendar";
import { v1 as uuidv1 } from 'uuid';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 50;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

class CalendarOptimization extends Component {
  state = {
    calendars: Calendars,
    columnDefs: [
      { headerName: "Name", field: "name" },
      { headerName: "Last Edit", field: "last_edited" },
      { headerName: "Status", field: "status" },
      {
        headerName: "Export",
        field: "export",
        cellRendererFramework: () => (
          <div>
            <button>
              <BiIcons.BiExport />
            </button>
          </div>
        ),
      },
    ],
    open: false,
  };

   addCalendar = (name, last_edited) => {
     let cal = [...this.state.calendars];
     cal.push({ name, last_edited, status: 'Processed', id: uuidv1() });
    this.setState({ calendars:  cal });
  };

  setOpen(open) {
    this.setState({
      open: open,
    });
  }

  handleOpen = () => this.setOpen(true);
  handleClose = () => this.setOpen(false);

  render() {
    return (
      <div>
        <div className="top-row">
          <h6 className="calendar-heading">All Calendars</h6>
          <button
            type="button"
            className="button1"
            onClick={this.handleOpen}
          >
            + New Calendar
          </button>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            BackdropComponent={Backdrop}
          >
            <AddCalendarForm  addCalendar={this.addCalendar}/>
          </StyledModal>
        </div>
        <div className="ag-theme-alpine calendar-grid">
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.calendars}
            defaultColDef={{ flex: 1 }}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}

export default CalendarOptimization;
