import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <div className="my-20">
      <Helmet>
        <title>Tutorials | Lingo Bingo</title>
      </Helmet>
      <div className="mb-5">
        <h1 className="text-3xl  font-bold">Tutorials Videos (6)</h1>
        <p>Start learning now get same lessons on YouTube videos.</p>
      </div>
      <div className="grid grid-cols-1  gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-full flex flex-col  h-full p-5 rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            width={460}
            height={250}
            className="rounded-xl w-full lg:h-[250px] h-[180px]"
            src="https://www.youtube.com/embed/r_2hFVYUi1g?si=KbMCO6teW-4IqoO4"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />
          <Link
            to={`/lessons/${1}`}
            className="btn mt-2  bg-teal-500 hover:bg-teal-600 text-white rounded-xl"
          >
            Learn this lesson (1)
          </Link>
        </div>

        <div className="w-full flex flex-col  h-full p-5 rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            width={460}
            height={250}
            className="rounded-xl w-full lg:h-[250px]  h-[180px]"
            src="https://www.youtube.com/embed/wD3FJgij79c?si=Mx7qHI_qjcohHEQK"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />

          <Link
            to={`/lessons/${2}`}
            className="btn mt-2  bg-teal-500 hover:bg-teal-600 text-white rounded-xl"
          >
            Learn this lesson (2)
          </Link>
        </div>
        <div className="w-full flex flex-col  h-full p-5 rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            width={460}
            height={250}
            className="rounded-xl w-full lg:h-[250px]  h-[180px]"
            src="https://www.youtube.com/embed/dAy4shOkogI?si=ki2JMsYcUG4BqxYq"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />

          <Link
            to={`/lessons/${3}`}
            className="btn mt-2  bg-teal-500 hover:bg-teal-600 text-white rounded-xl"
          >
            Learn this lesson (3)
          </Link>
        </div>
        <div className="w-full flex flex-col  h-full p-5 rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            width={460}
            height={250}
            className="rounded-xl w-full lg:h-[250px]  h-[180px]"
            src="https://www.youtube.com/embed/Uwaf6V91WnA?si=Pd87yYokbt-gHsa8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />

          <Link
            to={`/lessons/${4}`}
            className="btn mt-2  bg-teal-500 hover:bg-teal-600 text-white rounded-xl"
          >
            Learn this lesson (4)
          </Link>
        </div>
        <div className="w-full flex flex-col  h-full p-5 rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            width={460}
            height={250}
            className="rounded-xl w-full lg:h-[250px]  h-[180px]"
            src="https://www.youtube.com/embed/vEnQtNcR4iA?si=FCg-Q9p4z1TQ5PeD"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />
          <Link
            to={`/lessons/${5}`}
            className="btn mt-2  bg-teal-500 hover:bg-teal-600 text-white rounded-xl"
          >
            Learn this lesson (5)
          </Link>
        </div>
        <div className="w-full flex flex-col  h-full p-5 rounded-xl overflow-hidden shadow-lg bg-white">
          <iframe
            width={460}
            height={250}
            className="rounded-xl w-full lg:h-[250px]  h-[180px]"
            src="https://www.youtube.com/embed/rf-n_qI2occ?si=ZZ42v9OCgDHiFgf3"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />
          {/* <Link className="w-full" > */}
          <Link
            to={`/lessons/${6}`}
            className="btn mt-2  bg-teal-500 hover:bg-teal-600 text-white rounded-xl"
          >
            Learn this lesson (6)
          </Link>
          {/* </Link> */}
        </div>
      </div>
      <div className="flex flex-col justify-between items-center space-y-3 my-20">
        <p className="text-center text-lg text-gray-500 lg:w-[40%]">
          If you are interested in learning more about Easy Languages, you can
          do start learning now.
        </p>
        <Link
          className="btn px-20 rounded-full bg-teal-500 text-white hover:bg-teal-600"
          to={"/start-learning"}
        >
          Learn Vocabularies
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;
