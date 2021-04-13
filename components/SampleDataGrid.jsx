

import DataEditor from "@glideapps/glide-data-grid";
import {
  DataEditorContainer,
  GridColumn,
  GridCellKind,
} from "@glideapps/glide-data-grid";

export default function SampleDataGrid({ data }) {

  if (!window) {
    return null
  }

  const columns = [
    { title: "Number", width: 100 },
    { title: "Square", width: 100 },
  ];

  function getData([col, row]) {
    let n;
    if (col === 0) {
      n = row;
    } else if (col === 1) {
      n = row * row;
    } else {
      throw new Error("This should not happen");
    }
    return {
      kind: GridCellKind.Number,
      data: n,
      displayData: n.toString(),
      allowOverlay: false,
    };
  }

  return (
    <DataEditorContainer width={500} height={300}>
      <DataEditor getCellContent={getData} columns={columns} rows={1000} />
    </DataEditorContainer>
  );
}
