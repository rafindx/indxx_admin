import React from 'react'
import {Link} from "react-router-dom";
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/quill/quill.snow.css';
import '../assets/vendor/quill/quill.bubble.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/simple-datatables/style.css';
import '../style.css';

export default function Sidebar() {
  return (
    <div>
      <aside id="sidebar" className="sidebar">

<ul className="sidebar-nav" id="sidebar-nav">

  <li className="nav-item">
    <a className="nav-link " >
      <i className="bi bi-grid"></i>
  <Link as={Link} to="/">My Dashboard</Link>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link collapsed">
      <i className="bi bi-menu-button-wide"></i>
      <Link as={Link} to="/about">About</Link>
    </a>
  </li>

  {/* <li className="nav-item">
    <a className="nav-link collapsed">
      <i className="bi bi-menu-button-wide"></i>
      <Link as={Link} to="/forms">Forms</Link>
    </a>
  </li> */}

</ul>

</aside>

{/* <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/chart.js/chart.umd.js"></script>
  <script src="assets/vendor/echarts/echarts.min.js"></script>
  <script src="assets/vendor/quill/quill.min.js"></script>
  <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
  <script src="assets/vendor/tinymce/tinymce.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script> */}
    </div>
  )
}
