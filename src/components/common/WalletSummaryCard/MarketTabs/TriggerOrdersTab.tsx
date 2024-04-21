import React, { memo } from "react";
import CommonTable from "../../CommonTable/CommonTable";

const TriggerOrdersTab = () => {
  const fields = [
    { label: "Instrument" },
    { label: "Amount" },
    { label: "Value" },
    { label: "Avg. Price" },
    { label: "Mark Price" },
    { label: "ELP" },
    { label: "RSPL" },
  ];
  const data = [
    {
      id: 1,
      instrument: "Instrument 1",
      amount: "$14.66",
      value: "$133",
      avgPrice: "$12.2",
      markPrice: "$86.1",
      elp: "$12.3",
      rspl: "$17.6",
    },
  ];
  return (
    <CommonTable fields={fields}>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.instrument}</td>
          <td>{item.amount}</td>
          <td>{item.value}</td>
          <td>{item.avgPrice}</td>
          <td>{item.markPrice}</td>
          <td>{item.elp}</td>
          <td>{item.rspl}</td>
        </tr>
      ))}
    </CommonTable>
  );
};

export default TriggerOrdersTab;
