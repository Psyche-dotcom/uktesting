import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";

function AccountDropdown({ onClose, onValueProfileInfo }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { data, error, revalidate } = useSWR(["authenticatedDataUrl", token]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const value = true;
  const openModal = () => {
    setAnchorEl(null);
    onValueProfileInfo(value);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    onClose();
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      <button onClick={handleOpen} className="px-auto">
        Account
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div>
          <MenuItem onClick={openModal}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
        </div>
      </Menu>
    </div>
  );
}
export default AccountDropdown;
