import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";

function CustomDropdown({ onClose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>English</button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div className="flex p5" style={{ width: "340px" }}>
          <div className="w-full">
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Deutsch
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Español
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Français
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              日本語
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Dutch
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Português
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Русский
            </MenuItem>
          </div>
          <div className="w-full">
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              English
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Suomi
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Italiano
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              한국어
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Norsk
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Română
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Country icon"
              />
              Svenska
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
export default CustomDropdown;
