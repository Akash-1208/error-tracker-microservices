import React from "react";
import { TextField, Box } from "@mui/material";

export default function FilterBar({ filters, onFilterChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 2,
        mt: 2,
        justifyContent: "flex-start",
        flexWrap: "wrap"
      }}
    >
      <TextField
        label="Filter by Service"
        name="serviceName"
        variant="outlined"
        size="small"
        value={filters.serviceName}
        onChange={onFilterChange}
      />

      <TextField
        label="Filter by Exception"
        name="exceptionClass"
        variant="outlined"
        size="small"
        value={filters.exceptionClass}
        onChange={onFilterChange}
      />
    </Box>
  );
}
