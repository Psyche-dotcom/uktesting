import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PurchaseTimeModal = ({ onValueChange }) => {
  const value = false;
  const closeModal = () => {
    onValueChange(value);
  };

  return (
    <div className=" border-b-2 py-2 md:border-0">
      <div className="modal-overlay">
        <div className="relative contain-modal-content rounded-lg">
          <div
            className="modal-content pd-sm bg-white pt-4 rounded-lg overflow-scroll"
            style={{ height: "75%" }}
          >
            <div className=" bg-white rounded-lg text-center">
              <h4 className="modal-header">
                Top up minutes to continue chatting
              </h4>
              <p>
                There is no subscription. No recurring payments. Just buy what
                you need.
              </p>
              <button className="sub-class mb-3">
                <Image
                  src="/asset/green-mark.png"
                  title="approved icons"
                  height={24}
                  width={24}
                  className="mr-3 sub-icon"
                  alt="A marker icon"
                />
                <p className="mr-auto">15 minutes</p>
                <p>16.99 USD</p>
              </button>
              <button className="sub-class mb-3 sub-class-special">
                <Image
                  src="/asset/green-mark.png"
                  title="approved icons"
                  height={24}
                  width={24}
                  className="mr-3  sub-icon"
                  alt="A marker icon"
                />
                <p className="mr-auto border-pink">45 minutes</p>
                <p>49.99 USD</p>
              </button>
              <button className="sub-class mb-3">
                <Image
                  src="/asset/green-mark.png"
                  title="approved icons"
                  height={24}
                  width={24}
                  className="mr-3 sub-icon"
                  alt="A marker icon"
                />
                <p className="mr-auto">90 minutes</p>
                <p>99.99 USD</p>
              </button>
              <p className="text-xl text-black">Let&apos;s Encrypt</p>
            </div>

            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className="f-icon ab-position" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTimeModal;
