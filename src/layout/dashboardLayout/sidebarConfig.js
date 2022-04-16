import {RiDashboardFill} from 'react-icons/ri'
import { ImUsers } from 'react-icons/im'
import { FaShoppingBag,FaUserPlus } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { GrSecure } from 'react-icons/gr'
import {MdReportProblem} from 'react-icons/md'
const sidebarConfig = [
  {
    title: "dashboard",
    path: "app",
    icon: <RiDashboardFill />,
  },
  {
    title: "user",
    path: "user",
    icon: <ImUsers />,
  },
  {
    title: "product",
    path: "products",
    icon: <FaShoppingBag />,
  },
  {
    title: "blog",
    path: "blog",
    icon: <GiNotebook />,
  },
  {
    title: "login",
    path: "/login",
    icon: <GrSecure />,
  },
  {
    title: "register",
    path: "/register",
    icon: <FaUserPlus />,
  },
  {
    title: "not found",
    path: "/not-found",
    icon: <MdReportProblem />,
  },
];
export default sidebarConfig;