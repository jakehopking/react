import React, {useEffect, Fragment} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layout/AddButton";
import AddLogsModal from "./components/logs/AddLogsModal";
import EditLogsModal from "./components/logs/EditLogsModal";
import AddTechnicianModal from "./components/technicians/AddTechnicianModal";
import TechnicianListModal from "./components/technicians/TechnicianListModal";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddButton />
        <AddLogsModal />
        <EditLogsModal />
        <AddTechnicianModal />
        <TechnicianListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
