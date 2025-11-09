import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { getAllErrors, getAllErrorById } from "../api/errorApi";
import ErrorTable from "../components/ErrorTable";
import ErrorDetailsModal from "../components/ErrorDetailsModal";
import FilterBar from "../components/FilterBar";

export default function Dashboard() {
  const [errors, setErrors] = useState([]);
  const [filteredErrors, setFilteredErrors] = useState([]);
  const [selectedError, setSelectedError] = useState(null);
  const [filters, setFilters] = useState({
    serviceName: "",
    exceptionClass: ""
  });

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      const data = await getAllErrors();
      setErrors(data);
      setFilteredErrors(data);
    }
    fetchData();
  }, []);

  // Filter logic
  useEffect(() => {
    const filtered = errors.filter(
      (err) =>
        err.serviceName
          .toLowerCase()
          .includes(filters.serviceName.toLowerCase()) &&
        err.exceptionClass
          .toLowerCase()
          .includes(filters.exceptionClass.toLowerCase())
    );
    setFilteredErrors(filtered);
  }, [filters, errors]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  const handleRowClick = async (errorSummary) => {
  const fullError = await getAllErrorById(errorSummary.id);
  setSelectedError(fullError);
};

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Error Tracker Dashboard
      </Typography>

      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      <ErrorTable
        errors={filteredErrors}
        onRowClick={handleRowClick}
      />

      <ErrorDetailsModal
        open={!!selectedError}
        onClose={() => setSelectedError(null)}
        error={selectedError}
      />
    </Container>
  );
}
