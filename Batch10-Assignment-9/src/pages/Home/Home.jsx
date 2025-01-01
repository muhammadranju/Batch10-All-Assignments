/* eslint-disable react/prop-types */
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "animate.css";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Home | A Vocabulary Learning Application</title>
      </Helmet>

      {/* Hero section */}
      <div className="hero lg:my-20">
        <div className="absolute top-0 bottom-0 right-0 w-full h-full">
          <img
            src="/bg-d.png"
            className="w-full  opacity-70 lg:h-[780px] h-[350px] object-cover "
            alt=""
          />
        </div>
        <img
          src="./language-bg-2.png"
          className="w-full z-10 drop-shadow-xl  lg:h-[600px] h-[280px] object-cover rounded-t-3xl"
        />
      </div>
      {/* End of Hero section */}

      {/* Start of Features section */}
      <div className="flex flex-col justify-center items-center  space-y-5 my-20">
        <h1 className="text-4xl font-bold text-center animate__animated animate__bounce">
          Welcome to the Language Learning Platform
        </h1>
        <p className="text-center text-lg text-gray-500 lg:w-[70%]">
          At the core of our project is the idea that language learning should
          go beyond textbooks and classrooms. Our videos are fun to watch and
          allow learners to truly immerse themselves in a new language. All of
          our content is freely accessible and additional materials such as
          transcripts and exercises are available to everyone who supports our
          work as a member.
        </p>
      </div>
      {/* End of Features section */}

      {/* Start of Stats section */}
      <div className="stats border lg:py-10 flex lg:flex-row flex-col my-10 rounded-xl">
        <div className="stat place-items-center">
          <div className="stat-title">User Count</div>
          <div className="stat-value">
            <CountUp end={7868} />
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Lesson Count</div>
          <div className="stat-value text-secondary">
            <CountUp end={695} />
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title ">Vocabulary count</div>
          <div className="stat-value text-teal-500">
            <CountUp end={4505} />
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Tutorial Count</div>
          <div className="stat-value text-amber-500">
            <CountUp end={924} />
          </div>
        </div>
      </div>
      {/* End of Stats section */}

      {/* Start of Testimonials section */}
      <div className="divider -mb-16 mt-20"></div>

      <div className="flex flex-col lg:flex-row    lg:text-start text-center justify-between items-center gap-10 my-20">
        <div className="lg:space-y-10 space-y-3 ">
          <h1 className="lg:text-4xl font-bold text-3xl">
            Japanese Tutors Online
          </h1>
          <p className="lg:text-xl text-gray-500 font-medium lg:w-[80%]">
            Let us hand-pick your certified, native Japanese speaking, personal
            tutor and get immersed in the language - from the comfort of home.
          </p>
          <Link to={"/start-learning"}>
            <button className="rounded-full  mt-10 px-10 py-5 font-bold text-xl bg-teal-500 text-white hover:bg-teal-700">
              Explore Free Lessons
            </button>
          </Link>
        </div>
        <figure className="lg:w-[50%] ">
          <img
            src="./Translation-Platform.png"
            className="rounded-t-full h-full w-full"
            alt=""
          />
        </figure>
      </div>
      <div className="divider -mt-16"></div>

      {/* End of Testimonials section */}

      {/* Start of Japanese Lessons section */}
      <div className="flex flex-col justify-between  items-center lg:gap-10 my-20 lg:space-y-0 space-y-10">
        <img src="./japanese_lessons.png" className="lg:w-[50%] " alt="" />
        <div className="flex flex-col justify-between text-center items-center lg:gap-10 ">
          <h1 className="lg:text-4xl font-bold text-3xl">
            Private Japanese Lessons
          </h1>
          <p className=" text-xl text-gray-500 font-medium lg:w-[60%]">
            Live Lingua&rsquo;s Standard Japanese lessons are for anybody who is
            looking to learn or improve their Japanese. Here is how they work.
          </p>
        </div>
      </div>
      {/* End of Japanese Lessons section */}

      {/* Start of Japanese Lessons section */}
      <div className=" my-20">
        <div className="flex mb-5 flex-col justify-between items-center space-y-3 ">
          <h1 className="text-2xl font-bold">Japanese Lessons Mastering </h1>
          <p className=" text-center text-lg text-gray-500 lg:w-[40%]">
            Learn the Japanese language through tailored lessons focusing on
            speaking, reading, writing, and listening.
          </p>
        </div>
        <div className="grid text-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CardImage
            img={"./images/index_01.jpg"}
            title={"Japanese Lessons"}
            paragraph={
              "Dive into comprehensive Japanese lessons designed for all levels. Learn grammar, vocabulary, pronunciation, and conversation skills, while exploring Japan’s rich culture."
            }
          ></CardImage>

          <CardImage
            img={"./images/index_02.jpg"}
            title={"Skits"}
            paragraph={
              "Engage in fun, interactive skits to improve language skills, boost confidence, and enhance creativity. Perfect for practicing real-life scenarios and teamwork!"
            }
          ></CardImage>

          <CardImage
            img={"./images/index_03.jpg"}
            title={"Key Phrases"}
            paragraph={
              "Master essential Japanese phrases for everyday conversations. Learn greetings, questions, and expressions to communicate effectively and confidently."
            }
          ></CardImage>
          <CardImage
            img={"./images/index_04.jpg"}
            title={"Exercise"}
            paragraph={
              "Practice and reinforce your Japanese skills with engaging exercises. Includes writing, speaking, and listening tasks to boost proficiency and retention."
            }
          ></CardImage>
          <CardImage
            img={"./images/index_05.jpg"}
            title={"Vocabulary"}
            paragraph={
              "Expand your Japanese vocabulary with themed word lists and practical examples. Build a strong foundation for daily conversations and advanced language skills."
            }
          ></CardImage>

          <CardImage
            img={"./images/index_06.jpg"}
            title={"Culture"}
            paragraph={
              "Discover Japanese culture through traditions, customs, and history. Gain deeper insights to complement your language learning journey."
            }
          ></CardImage>
        </div>
      </div>
    </section>
  );
};

export default Home;

function CardImage({ img, title, paragraph }) {
  return (
    <div className="shadow-lg rounded-xl p-3 lg:space-y-2 ">
      <img src={img} alt="" className=" rounded-xl" />
      <h1 className="text-2xl font-bold ">{title}</h1>
      <p className="px-5 text-base text-gray-500 ">{paragraph}</p>
    </div>
  );
}
