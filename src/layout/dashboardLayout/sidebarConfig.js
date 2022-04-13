import {RiDashboardFill} from 'react-icons/ri'
import { ImUsers } from 'react-icons/im'
import { FaShoppingBag,FaUserPlus } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { GrSecure } from 'react-icons/gr'
import {MdReportProblem} from 'react-icons/md'
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
    icon: <GrSecure />,
  },
  {
    title: "register",
    path: "dashboard/register",
    icon: <FaUserPlus />,
  },
  {
    title: "not found",
    path: "dashboard/not-found",
    icon: <MdReportProblem />,
  },
];
export default sidebarConfig;