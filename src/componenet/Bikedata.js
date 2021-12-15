import { Supabase } from "./Client";
import React, { useEffect, useState } from "react";

const Bikedata = () => {
  let [bikedata, assigndata] = React.useState([]);
  useEffect(() => {
    const supabase_bikedata = async () => {
      let data = await Supabase.from("bikedata").select();
      return data;
    };

    supabase_bikedata().then((val) => {
      assigndata(val.data);
    });
  }, []);
  
  return bikedata;
};

const BikeData = Bikedata();

export default BikeData;
