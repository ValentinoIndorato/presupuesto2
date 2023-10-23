/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

import SvgGridView from "../assets/icons/SvgGridView";
import SvgPreviousExpenses from "../assets/icons/SvgPreviousExpenses";
import SvgSavingsGoals from "../assets/icons/SvgSavingsGoals";

import SvgHistoricalReports from "../assets/icons/SvgHistoricalReports";

const Asidebar = () => {
  return (
    <>
        <aside className="asidebar-container">          
          <nav>
            <ul>
              <NavLink to={"/"}><li > <SvgGridView /> Dashboard </li></NavLink>
              <NavLink to={"/previous-expenses"}><li> <SvgPreviousExpenses /> Gastos anteriores </li></NavLink>
              <NavLink to={"/savings-goals"}><li> <SvgSavingsGoals /> Metas de ahorro </li></NavLink>
              <NavLink to={"/historical-reports"}><li > <SvgHistoricalReports /> Reportes históricos </li></NavLink>
            </ul>
          </nav>
        </aside>
    </>
  )
}

export default Asidebar