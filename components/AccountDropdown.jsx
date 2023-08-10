import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import CustomModal from "./CustomModal";
import { useState } from "react";
import Link from "next/link";
import SettingsModal from "./SettingsModal";
import AccountDetailsModal from "./AccountDetailsModal";

function AccountDropdown({ onClose, onValueProfileInfo }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const value = true;
  const openModal = () => {
    setAnchorEl(null);
    onValueProfileInfo(value);
  };
  // const closeModal = () => {
  //   setIsOpen(false);
  //   onClose();
  // };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
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
