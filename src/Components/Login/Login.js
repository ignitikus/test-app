import React, { useState } from "react";
import { Stack, Grid, Box, TextField } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmail = (event) => {
    if (event.key === "Enter") setEmail(event.target.value);
  };

  const handlePass = (event) => {
    if (event.key === "Enter") setPass(event.target.value);
  };
  return (
    <Stack spacing={2}>
      <TextField
        id="email"
        label="email"
        variant="filled"
        onKeyDown={handleEmail}
      />
      <div>{email}</div>
      <TextField
        id="password"
        label="password"
        type="password"
        variant="filled"
        onKeyDown={handlePass}
      />
      <div>{pass}</div>
    </Stack>
  );
}
