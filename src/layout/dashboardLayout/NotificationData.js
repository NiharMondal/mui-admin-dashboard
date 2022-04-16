import { AiFillCodeSandboxCircle, AiFillMessage } from "react-icons/ai";
import { IoIosMailOpen } from "react-icons/io";
import { FaBabyCarriage } from "react-icons/fa";
import {GiParrotHead} from 'react-icons/gi'
export const newData = [
  {
    icon: <AiFillCodeSandboxCircle />,
    head: "Your order is placed",
    span: "waiting for shipping",
    time: "about 3 hours",
  },
  {
    icon:<GiParrotHead/>,
    head: "Doyel Davis",
    span: "answered to your comment on the minimal",
    time: "about 7 hours",
  },
];
export const olderData = [
  {
    icon: <AiFillMessage />,
    head: "You have new message",
    span: "5 unread messages",
    time: "1 day",
  },
  {
    icon: <IoIosMailOpen />,
    head: "You have new mail",
    span: "sent from guido padberg",
    time: "2 days",
  },
  {
    icon: <FaBabyCarriage />,
    head: "Delivery processing",
    span: "Your order is being shipped",
    time: "3 days",
  },
];
