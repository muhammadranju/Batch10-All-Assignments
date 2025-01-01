import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const StartLearning = () => {
  const { data } = useLoaderData();

  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold">Start Learning</h1>
      <p className=" text-lg text-gray-500 lg:w-[40%]">
        Start learning now and get your first lesson.
      </p>
      <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Helmet>
          <title>Start Learning | Lingo Bingo</title>
        </Helmet>
        {data.map((item) => {
          return (
            <div key={item.id} className="card shadow-xl ">
              <div className="card-body">
                <figure className=" rounded-t-lg">
                  <img
                    src="./Translation-Platform.png"
                    className="w-full object-cover h-24"
                    alt=""
                  />
                </figure>
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="flex justify-center items-center   w-full">
                  <Link
                    to={`/lessons/${item.id}`}
                    className=" btn rounded-full flex-1  py-3 font-bold  bg-teal-500 text-white hover:bg-teal-600"
                  >
                    View more
                  </Link>
                  <Link
                    to={`/tutorials`}
                    className=" btn rounded-full flex-1  py-3 font-bold  bg-teal-700 text-white hover:bg-teal-800"
                  >
                    Video Tutorials
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col  justify-between items-center  my-20">
        <h2 className="lg:text-3xl font-bold">Learning japanese alphabet</h2>
        <p className="lg:text-lg text-gray-500 lg:w-[40%] text-center">
          Start learning now and get your first lesson.
        </p>
        <div className="p-5 lg:w-[60%] rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            width={900}
            className="rounded-xl w-full lg:h-[500px]  h-[180px]"
            height={500}
            src="https://www.youtube.com/embed/vEnQtNcR4iA?si=xM4HnVDdLWz9Iovr"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          />
        </div>
        <Link to={"/tutorials"}>
          <button className="btn px-20 mt-14 rounded-full bg-teal-500 text-white hover:bg-teal-600">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartLearning;
