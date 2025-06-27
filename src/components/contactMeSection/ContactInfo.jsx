import React from "react";
import SingleInfo from "./SingleInfo";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="mokosandorkoni@gamil.com" Image={HiOutlineMail} />
      <SingleInfo text="+23 675 29 20 20" Image={FiPhone} />
      <SingleInfo text="Southwest, Cameroon" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
