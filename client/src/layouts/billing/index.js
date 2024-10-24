/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";

import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button,
  TextareaAutosize,
} from "@mui/material";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50rem",
            margin: "3rem auto",
            gap: "2rem",
          }}
        >
          <TextField id="standard-basic" label="Full Name" variant="standard" />
          <TextField id="standard-basic" label="Email ID" variant="standard" />
          <TextField id="standard-basic" label="Phone Number" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <TextField id="standard-basic" label="Message" variant="standard" multiline />

          <Button
            variant="contained"
            sx={{ color: "#ffffff", width: "25rem", margin: "auto auto" }}
            href="/video-capture"
          >
            Next
          </Button>
        </Box>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
