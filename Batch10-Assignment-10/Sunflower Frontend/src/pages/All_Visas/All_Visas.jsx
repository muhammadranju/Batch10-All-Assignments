import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import CardSkeletons from "../../components/Cards/CardSkeletons";
import { Helmet } from "react-helmet";

const All_Visas = () => {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("All Types");
  useEffect(() => {
    const fetchVisas = async () => {
      // Replace with your API endpoint
      const response = await fetch(
        "https://sunflower-bankend-api.vercel.app/visas"
      );
      const data = await response.json();
      setVisas(data.visas);
      setLoading(false);
    };

    fetchVisas();
  }, []);

  const handelSortVisas = async (e) => {
    setLoading(true);
    const sortBy = e.target.value;
    setSortBy(sortBy);

    // Replace with your API endpoint
    const response = await fetch(
      `https://sunflower-bankend-api.vercel.app/visas?visaType=${sortBy}`
    );
    const data = await response.json();
    setVisas(data.visas);

    console.log(data);
    setLoading(false);
  };

  return (
    <div className="w-11/12 mx-auto  lg:w-11/12 md:w-11/12 xl:container py-10">
      <Helmet>
        <title>All Visas | Visa Navigator</title>
      </Helmet>
      <div className="py-5 flex justify-between">
        <h1 className="text-3xl font-bold dark:text-slate-100">All Visas</h1>
        <div>
          <select
            onChange={handelSortVisas}
            className="select select-bordered w-full dark:text-slate-100 dark:bg-slate-800 max-w-xs"
          >
            <option selected>All Types</option>
            <option>Tourist Visa</option>
            <option>Student Visa</option>
            <option>Official Visa</option>
          </select>
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {loading ? (
          <>
            <CardSkeletons />
            <CardSkeletons />
            <CardSkeletons />
            <CardSkeletons />
            <CardSkeletons />
            <CardSkeletons />
            <CardSkeletons />
            <CardSkeletons />
          </>
        ) : (
          visas.map((visa) => <Cards key={visa._id} visa={visa} />)
        )}
      </div>
    </div>
  );
};

export default All_Visas;
