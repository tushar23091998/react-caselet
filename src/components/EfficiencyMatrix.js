import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import CampaignDetails from "../dummy_data/campaign_matrix.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const gridStyleMatrix = {
  "padding-top": "40px",
  "padding-left": "50px",
  height: "300px",
  width: "90%",
};

const chartMatrixStyle = {
  width: "93.5%",
  height: "350px",
  "margin-bottom": "50px",
  "margin-top": "50px",
};

class EfficiencyMatrix extends Component {
  total_margin = CampaignDetails.reduce(
    (total, currentValue) =>
      (total = total + parseFloat(currentValue.total_incremental_margin)),
    0
  );
  total_sales = CampaignDetails.reduce(
    (total, currentValue) =>
      (total = total + parseFloat(currentValue.total_incremental_sales)),
    0
  );
  state = {
    campaignMatrix: CampaignDetails,
  };

  render() {
    return (
      <div>
        <h6 style={{ "font-weight": "bold" }}>Campaign Effectiveness Matrix</h6>
        <div className="ag-theme-alpine" style={gridStyleMatrix}>
          <TableContainer style={{ gridStyleMatrix }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Classification</TableCell>
                  <TableCell align="right">
                    Number&nbsp;of&nbsp;Offers
                  </TableCell>
                  <TableCell align="right">
                    Total Incremental Sales&nbsp;(€)
                  </TableCell>
                  <TableCell align="right">
                    Total Incremental Margin&nbsp;(€)
                  </TableCell>
                  <TableCell align="right">Classification&nbsp;(%)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.campaignMatrix.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.classification_name}
                    </TableCell>
                    <TableCell align="right">{row.number_of_offers}</TableCell>
                    <TableCell align="right">
                      {row.total_incremental_sales}
                    </TableCell>
                    <TableCell align="right">
                      {row.total_incremental_margin}
                    </TableCell>
                    <TableCell align="right">{row.classification}</TableCell>
                  </TableRow>
                ))}
                <TableRow
                  key={-1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {""}
                  </TableCell>
                  <TableCell align="right">{""}</TableCell>
                  <TableCell align="right">{this.total_sales}</TableCell>
                  <TableCell align="right">{this.total_margin}</TableCell>
                  <TableCell align="right">{""}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div style={chartMatrixStyle}>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={200}
              data={this.state.campaignMatrix}
              margin={{
                top: 20,
                right: 40,
                left: 40,
                bottom: -30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="classification_name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="total_incremental_margin" fill="#29b6f6" />
              <Bar dataKey="total_incremental_sales" fill="#66bb6a" />
              <Bar dataKey="number_of_offers" fill="#f44336" />
              <Bar dataKey="classification" fill="#ffa726" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default EfficiencyMatrix;
