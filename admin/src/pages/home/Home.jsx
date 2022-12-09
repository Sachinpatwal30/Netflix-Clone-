import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featuredInfo/FeatureInfo";
import "./home.css";
import WidgetSm from "../../components/widget small/WidgetSm";
import WidgetLg from "../../components/widget large/WidgetLg";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";

export default function Home() {

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );




  const [userStats, setUserStats] = useState([]);


  useEffect(() => {

    const getStats = async () => {

      try {
        const res = await axios.get("users/stats");

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );

      } catch (error) {
        console.log(error);

      }

    }

    getStats();

  }, [MONTHS  ]);

  console.log("testing ", userStats);



  return (
    <div className="home">
      


      <FeatureInfo />

      <Chart title="User Analytics" data={userStats} grid dataKey="New User" />

      <div className="homeWidgets">

        <WidgetSm />
        <WidgetLg />

      </div>



    </div>
  )
}
