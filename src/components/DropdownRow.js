import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import ProductData from "../dummy_data/products.json";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button"

const style = {
  width: 200,
  height: 50,
  "margin-top": "40px",
  "margin-left": "30px",
  "font-weight": "bold",
};

const buttonStyle = {
  width: 200,
  height: 50,
  "margin-top": "40px",
  "margin-left": "25px",
  "font-weight": "bold",
  color: 'black'
};

const flexStyle = {
  "margin-left": "20px",
  display: "flex",
  "justify-content": "center",
  width: "95%",
};

class DropdownRow extends Component {
  state = {
    products: ProductData.products,
  };

  pN = [
    ...new Set(this.state.products.map(({ product_name }) => product_name)),
  ];
  cN = [
    ...new Set(this.state.products.map(({ category_name }) => category_name)),
  ];
  bN = [
    ...new Set(this.state.products.map(({ product_brand }) => product_brand)),
  ];
  productNames = this.pN.map((product_name) => {
    return <option value={1}>{product_name}</option>;
  });
  categoryNames = this.cN.map((category_name) => {
    return <option value={1}>{category_name}</option>;
  });
  brandNames = this.bN.map((product_brand) => {
    return <option value={1}>{product_brand}</option>;
  });
  retailerNames = ['retailer_0', 'retailer_1'].map((retailer_name) => {
    return <option value={1}>{retailer_name}</option>;
  });

  render() {
    return (
      <Box sx={flexStyle}>
        <Box sx={style}>
          <FormControl fullWidth>
            <InputLabel>Retailer</InputLabel>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: "retailer",
                id: "uncontrolled-native",
              }}
            >
              {this.retailerNames}
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={style}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: "category",
                id: "uncontrolled-native",
              }}
            >
              {this.categoryNames}
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={style}>
          <FormControl fullWidth>
            <InputLabel>Brand</InputLabel>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: "brand",
                id: "uncontrolled-native",
              }}
            >
              {this.brandNames}
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={style}>
          <FormControl fullWidth>
            <InputLabel>Product</InputLabel>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: "product",
                id: "uncontrolled-native",
              }}
            >
              {this.productNames}
            </NativeSelect>
          </FormControl>
        </Box>
        <Button variant="contained" style={buttonStyle} color="success">
          APPLY FILTERS
        </Button>
        <Button variant="outlined" disabled style={buttonStyle}>
          CLEAR FILTERS
        </Button>
      </Box>
    );
  }
}

export default DropdownRow;
