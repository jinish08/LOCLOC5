import { MDBDataTableV5 } from "mdbreact";
// import Result from '../components/result';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/AuthContext";
import { useRouter } from "next/router";

const Table = ({ data, columns }) => {
  const router = useRouter();
  const [usersData, setUsersData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const { market, setMarket } = useContext(UserContext);
  const [sapIDs, setSapIDs] = useState([]);
  useEffect(() => {
    if (data.length !== 0 && columns) {
      console.log(data);
      setUsersData(data);
      setTableRows(
        data.map((r) => {
          return {
            userid: r.userid,
            product: r.product,
            support: r.support,
            clickEvent: (e) => handleClick(e),
          };
        })
      );
    }
  }, [data]);
  const handleClick = (e) => {
    console.log(e.product);
    setMarket(e.product);
    router.push("/dynamicPage3");
  };
  const addUserData = (e) => {
    if (e.length === data.length && sapIDs.length !== data.length) {
      let saps = [];
      e.map((r) => saps.push(r));
      setSapIDs(saps);
    } else if (sapIDs.length !== data.length && !sapIDs.includes(e.sapid)) {
      setSapIDs((current) => [...current, e]);
    } else if (sapIDs.includes(e.sapid)) {
      const index = sapIDs.indexOf(e.sapid);
      sapIDs.splice(index, 1);
      setSapIDs((current) => [...current]);
    } else {
      setSapIDs([]);
    }
  };

  const [datatable, setDatatable] = React.useState({
    columns: columns,
    rows: tableRows,
  });
  useEffect(() => {
    setDatatable({
      columns: columns,
      rows: tableRows,
    });
  }, [tableRows]);
  return (
    <>
      {datatable.rows.length !== 0 ? (
        <div className="p-8">
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            // checkbox
            headCheckboxID="id6"
            bodyCheckboxID="checkboxes6"
            // multipleCheckboxes
            responsive
            searchTop
            searchBottom={false}
          />
        </div>
      ) : null}
    </>
  );
};

export default Table;
