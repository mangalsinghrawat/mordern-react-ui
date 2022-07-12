import React from "react";
import { Bar, Line, Bubble } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Users } from "../components/Users";
ChartJS.register(...registerables);

const Chart = () => {
  const users = Users;
  //   const month = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  return (
    <div>
      {/* <Bar
        data={{
          labels: ["Users", "Resumes", "Portals"],
          datasets: [
            {
              label: "Total Data",
              data: [users.length, 110, 3],
              backgroundColor: ["#e9b949", "#647acb", "#d66a6a"],
              //   borderColor: ["black"],
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        options={{
          maintainAspectRatio: false,
          //   scales: {
          //     yAxes: [
          //       {
          //         ticks: {
          //           beginAtZero: true,
          //         },
          //       },
          //     ],
          //   },
        }}
      /> */}
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Users",
              data: [users.length, 20, 40, 30, 29, 22, 55],
              backgroundColor: ["#e9b949"],
              //   borderColor: ["black"],
              borderWidth: 1,
            },
            {
              label: "Resumes",
              data: [110, 130, 120, 110, 150, 160, 170],
              backgroundColor: ["#647acb"],
              //   borderColor: ["black"],
              borderWidth: 1,
            },
            {
              label: "Portals",
              data: [3, 5, 2, 4, 2, 6, 5],
              backgroundColor: ["#d66a6a"],
              //   borderColor: ["black"],
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        options={{
          maintainAspectRatio: false,
          //   scales: {
          //     yAxes: [
          //       {
          //         ticks: {
          //           beginAtZero: true,
          //         },
          //       },
          //     ],
          //   },
        }}
      />
    </div>
  );
};

export default Chart;