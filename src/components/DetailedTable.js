import React, { Component } from "react";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import ProductData from "../dummy_data/products.json";
import DetailedData from "../dummy_data/detailed_table_data.json";
import { DataGrid } from "@mui/x-data-grid";

const gridStyleMatrix = {
  "margin-top": "20px",
  height: "375px",
  width: "100%",
};

const gridUpperStyleMatrix = {
  "padding-top": "40px",
  "padding-left": "50px",
  height: "300px",
  width: "90%",
};

const gridLineStyle = {
  color: "#104d23",
  fontSize: "15px",
  display: "flex",
  justifyContent: "space-between",
  "font-weight": "bold",
  height: 50,
};

const columns = [
  { field: "id", headerName: "Promo ID", width: 110 },
  { field: "product_name", headerName: "Product name", width: 150 },
  { field: "promo_spend", headerName: "Promo Spend", width: 120 },
  {
    field: "volume",
    headerName: "Volume",
    width: 120,
  },
  {
    field: "baseline",
    headerName: "Baseline",
    width: 120,
  },
  {
    field: "cpg_baseline",
    headerName: "CPG Baseline",
    width: 120,
  },
  {
    field: "cpg_uplift",
    headerName: "Uplift",
    width: 120,
  },
  {
    field: "cpg_discount",
    headerName: "Discount",
    width: 120,
  },
];

export const detailedData = () => {
  let listOfObjects = [];
  DetailedData.promo_events.forEach(function (entry) {
    let singleObj = {};
    singleObj["id"] = entry.promo_id;
    singleObj["product_name"] = ProductData.products.filter(function (item) {
      return item.product_id === entry.product_id;
    })[0].product_name;
    singleObj["promo_spend"] = parseFloat(entry.promo_spend).toFixed(2);
    singleObj["volume"] = parseFloat(entry.product_kpi.volume).toFixed(2);
    singleObj["baseline"] = parseFloat(
      entry.product_kpi.baseline_volume
    ).toFixed(2);
    singleObj["cpg_baseline"] = parseFloat(
      entry.product_kpi.profit_waterfall_cpg.baseline
    ).toFixed(2);
    singleObj["cpg_uplift"] = parseFloat(
      entry.product_kpi.profit_waterfall_cpg.uplift
    ).toFixed(2);
    singleObj["cpg_discount"] = parseFloat(
      entry.product_kpi.profit_waterfall_cpg.discount
    ).toFixed(2);
    listOfObjects.push(singleObj);
  });
  return listOfObjects;
};

class DetailedTable extends Component {
  render() {
    return (
      <div>
        <h6 style={{ "font-weight": "bold" }}>Metrics</h6>
        <div className="ag-theme-alpine" style={gridUpperStyleMatrix}>
          <div style={gridLineStyle}>
            <span style={{ "margin-top": "10px", "margin-left": "10px" }}>
              <BsIcons.BsFilter size={15} /> FILTERS
            </span>
            <span style={{ "margin-top": "10px", "margin-right": "10px" }}>
              <BiIcons.BiExport size={15} /> EXPORT
            </span>
          </div>
          <DataGrid
            rows={detailedData()}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            style={gridStyleMatrix}
          />
          <div style={{ "padding-bottom": "50px" }}></div>
        </div>
      </div>
    );
  }
}

export default DetailedTable;
