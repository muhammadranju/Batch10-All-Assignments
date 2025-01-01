import { Fade } from "react-awesome-reveal";
import CardSkeletons from "../Cards/CardSkeletons";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";

const LatestVisas = ({ loading, visas }) => {
  return (
    <Fade>
      <div>
        <h2 className="text-3xl text-slate-800 dark:text-slate-100 font-extrabold ">
          Latest Visas
        </h2>
        <div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {loading ? (
              <>
                <CardSkeletons />
                <CardSkeletons />
                <CardSkeletons />
              </>
            ) : (
              visas.map((visa) => <Cards key={visa._id} visa={visa} />)
            )}
          </div>
          <div className="flex justify-center my-10">
            <Link to={"/all-visas"}>
              <button className="cursor-pointer rounded-xl  bg-gradient-to-r  from-indigo-700   to-indigo-500  px-10 shadow-lg  py-3 text-base font-medium text-white transition hover:bg-opacity-90">
                See all visas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default LatestVisas;
