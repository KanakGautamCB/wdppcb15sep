import React from 'react'
import { Chart } from "react-google-charts";

function Analytics({completedTasks, incompletedTasks}) {
    const data=[
        ['Tasks', 'amount'],
        ['completedTasks',completedTasks],
        ['incompletedTasks',incompletedTasks]
    ]
    const options = {
        title: "Task Completion",
      };
  return (
    <>
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
        />
    </>
  )
}

export default Analytics