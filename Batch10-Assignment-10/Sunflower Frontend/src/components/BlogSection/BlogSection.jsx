const BlogSection = () => {
  return (
    <div className="py-20">
      <div className=" flex flex-col items-center justify-center mb-10">
        <h2 className="text-center text-4xl font-bold tracking-tight mb-5 dark:text-slate-100 text-gray-900 sm:text-4xl ">
          Our Latest Blogs
        </h2>
        <p className="text-center text-lg max-w-3xl dark:text-slate-100 text-gray-500">
          Here are some of our latest blog posts. Read our latest blog posts to
          stay up to date with the latest news and updates from our team.They
          guided me through the entire process and answered all my questions
          promptly.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1527529209691-46fac72cf68d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                Published on: January 15, 2024
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  5 Common Visa Application Mistakes and How to Avoid Them
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Discover the most exciting travel destinations for the coming
                year and the visa requirements you need to know.
              </p>
            </div>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                Published on: February 5, 2024
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  Why Travel Insurance is Essential for Every Trip and Visa
                  Application
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Learn practical tips and tricks to ensure your visa application
                is approved without any hassle he most common visa application
              </p>
            </div>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1520078662339-6c4aad87c929?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                Published on: March 1, 2024
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  Understanding Visa Types: Tourist, Student, and Work
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Protect yourself from unexpected challenges by learning the
                importance of travel insurance and how it relates to your visa.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogSection;
