import { MDBDataTableV5 } from "mdbreact";
// import Result from '../components/result';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React from "react";

const Table = ({ data, columns }) => {
  const [usersData, setUsersData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [sapIDs, setSapIDs] = useState([]);
  useEffect(() => {
    if (data.length !== 0 && columns) {
      console.log(data);
      setStundentsData(data);
      setTableRows(
        data.map((r) => {
          return {
            sapid: r.sapid,
            name: r.name,
            // clickEvent: () => handleClick(),
          };
        })
      );
    }
  }, [data]);

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
            checkbox
            headCheckboxID="id6"
            bodyCheckboxID="checkboxes6"
            getValueCheckBox={(e) => {
              addUserData(e);
            }}
            getValueAllCheckBoxes={(e) => {
              addUserData(e);
            }}
            multipleCheckboxes
            responsive
            searchTop
            searchBottom={false}
          />
        </div>
      ) : (
        Loading
      )}
    </>
  );
};

export default Table;
