import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import axios from "axios";
import { useEffect, useState } from "react";

export default function data() {
  const [employeeData, setEmployeeData] = useState([]);

  // Component for Author (without image)
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const getEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/worker/getEmployeeData");
      setEmployeeData(response.data.data); // Set employee data from response
      console.log(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return {
    columns: [
      { Header: "Employee", accessor: "author", width: "45%", align: "left" },
      { Header: "Function", accessor: "function", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Employed", accessor: "employed", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: employeeData.map((employee) => ({
      author: <Author name={employee.name} email={employee.email} />,
      function: <Job title={employee.clearance} description="Employee" />, // Adjusted job description
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={employee.status === "online" ? "online" : "offline"} // Add a status property if needed
            color={employee.status === "online" ? "success" : "dark"}
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
      employed: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {/* You can format the date if needed */}
          {employee.createdAt ? new Date(employee.createdAt).toLocaleDateString() : "N/A"}
        </MDTypography>
      ),
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    })),
  };
}
