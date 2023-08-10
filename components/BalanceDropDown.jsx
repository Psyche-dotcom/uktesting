import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import CustomModal from "./CustomModal";
import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/service/apiCalls/Fetcher";

import PurchaseTime from "./ForgotPasswordMail";
import PurchaseTimeModal from "./PurchaseTimeModal";
// const fetcher = async () => {
//   const response = await fetch();
//   const data = await response.json();
//   return data;
// };

function BalanceDropDown({ onClose }) {
  // const { data, error } = useSWR("/api/data1", fetcher);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [balanceModal, setBalanceModal] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const showMinuteModal = () => {
    setBalanceModal(true);
    setAnchorEl(null);
  };
  const handleValueChange = (value) => {
    setBalanceModal(value);
  };

  return (
    <div>
      <button onClick={handleOpen} className="text-center">
        Balance
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div>
          <MenuItem onClick={handleClose}>0 minutes</MenuItem>
          {/* <MenuItem onClick={handleClose}>{data.Time} minutes</MenuItem> */}
          <MenuItem className="text-pink" onClick={showMinuteModal}>
            Buy minutes
          </MenuItem>
        </div>
      </Menu>
      {balanceModal && <PurchaseTimeModal onValueChange={handleValueChange} />}
    </div>
  );
}
export default BalanceDropDown;
