import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AiTwotoneSound } from "react-icons/ai";

import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Cookies from "js-cookie";
import { HiSpeakerWave } from "react-icons/hi2";

const Lessons = () => {
  const navigate = useNavigate();

  const { filterData } = useLoaderData();

  const [whenSay, setWhenSay] = useState(null);

  const { id } = useParams();

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; // Japanese
    window.speechSynthesis.speak(utterance);
  }

  const handelWhenToSay = (object) => {
    setWhenSay(object);
    document.getElementById("whenSay").showModal();
  };

  const handelCloseAlert = () => {
    Cookies.remove("isShown");
  };
  setTimeout(() => {}, 2000);

  useEffect(() => {
    if (Cookies.get("isShown") === "true") {
      setTimeout(() => {
        document.getElementById("alert_modal").showModal();
      }, 1500);
    }
  }, []);

  return (
    <div className="my-20">
      <div className="flex flex-col space-y-3">
        <h1 className=" mb-5 text-4xl font-bold text-gray-800">
          Lessons Number: {id}
        </h1>
        <span>Number of Lessons: {filterData.length}</span>
        <button
          onClick={() => navigate(-1)}
          className="w-fit btn rounded-full bg-teal-500 text-white hover:bg-teal-600 btn-sm"
        >
          <IoMdArrowRoundBack />
          Back to Lessons
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Helmet>
          <title>Lessons {id} | Lingo Bingo</title>
        </Helmet>

        {filterData.map((item) => {
          return (
            <div key={item.id} className="card shadow-lg space-y-5">
              <div className="card-body  font-medium">
                <h2 className="card-title text-2xl font-black">
                  Word: {item.word}{" "}
                  <AiTwotoneSound
                    className="cursor-pointer text-4xl"
                    onClick={() => pronounceWord(item.word)}
                  />
                </h2>
                <div className=" font-medium">
                  <p>Meaning: {item.meaning}</p>
                  <p> Pronunciation: {item.pronunciation}</p>
                </div>
                <div className=" font-medium">
                  <p
                    className={`font-bold capitalize ${
                      item.difficulty === "easy"
                        ? "text-green-500 "
                        : "text-yellow-500"
                    }`}
                  >
                    Difficulty: {item.difficulty}
                  </p>
                  <p> Part of Speech: {item.part_of_speech}</p>
                </div>

                <div className="card-actions mt-5 items-center">
                  <button
                    onClick={() => handelWhenToSay(item)}
                    className="btn btn-sm bg-teal-500 hover:bg-teal-600 text-white rounded-full"
                  >
                    When to Say
                  </button>
                  <span
                    onClick={() => pronounceWord(item.example)}
                    className={` cursor-pointer flex items-center ${
                      item.difficulty === "easy"
                        ? "text-green-500 bg-green-100"
                        : "text-yellow-500 bg-yellow-100"
                    } capitalize rounded-full  py-1 px-7 font-bold`}
                  >
                    {item.difficulty}
                    <HiSpeakerWave className="cursor-pointer ml-2" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <dialog id="whenSay" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col justify-center space-y-3">
            <h3 className="text-xl flex items-center">
              Word: <span className="font-bold text-2xl"> {whenSay?.word}</span>
            </h3>
            <h3 className="text-lg">
              Meaning:
              <span className="font-semibold text-xl"> {whenSay?.meaning}</span>
            </h3>
            <h3 className=" text-lg">
              When to say:
              <span className="font-semibold text-xl">
                {whenSay?.when_to_say}
              </span>
            </h3>
            <p>
              Example:
              <span className="font-semibold"> {whenSay?.example}</span>
            </p>
          </div>
        </div>
      </dialog>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="alert_modal" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <form method="dialog">
            <button
              onClick={handelCloseAlert}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-3xl text-yellow-400  text-center">
            Attention please!
          </h3>
          <p className="py-4 text-xl font-bold text-center">
            Sometimes The listen button Is working but you can&apos;t hear any
            sound.
          </p>
          <p className="text-center">
            I am also facing this problem. If you are also facing the same
            problem, please try using another browser.
          </p>
          <p className="text-center">
            This problem might be showing in Google Chrome, Please use any other
            browser or Microsoft Edge.
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Lessons;
