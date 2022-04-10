import {RiDashboardFill} from 'react-icons/ri'
import { ImUsers,ImBug } from 'react-icons/im'
import { FaShoppingBag,FaUserPlus } from 'react-icons/fa'
import { BsBookmarkStarFill } from 'react-icons/bs'
import {GiNotebook} from 'react-icons/gi'
const sidebarConfig = [
  {
    title: "dashboard",
    path: "dashboard/app",
    icon: <RiDashboardFill />,
  },
  {
    title: "user",
    path: "dashboard/user",
    icon: <ImUsers />,
  },
  {
    title: "product",
    path: "dashboard/products",
    icon: <FaShoppingBag />,
  },
  {
    title: "blog",
    path: "dashboard/blog",
    icon: <GiNotebook />,
  },
  {
    title: "login",
    path: "dashboard/login",
    icon: <BsBookmarkStarFill />,
  },
  {
    title: "register",
    path: "dashboard/register",
    icon: <FaUserPlus />,
  },
  {
    title: "not found",
    path: "dashboard/not-found",
    icon: <ImBug />,
  },
];
export default sidebarConfig;