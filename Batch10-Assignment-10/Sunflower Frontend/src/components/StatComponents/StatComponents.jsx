const StatComponents = () => {
  return (
    <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold dark:text-slate-100 text-gray-900 sm:text-4xl">
          Why Trust Visa Navigator?
        </h2>

        <p className="mt-4 dark:text-slate-100 text-gray-500 sm:text-xl">
          Thousands of successful visa applications processed each month,
          trusted by travelers worldwide.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium dark:text-slate-100 text-gray-500">
            Successful Applications
          </dt>

          <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">
            1M+
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium dark:text-slate-100 text-gray-500">
            Countries Covered
          </dt>

          <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">
            100+
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium dark:text-slate-100 text-gray-500">
            Customer Satisfaction
          </dt>

          <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">
            99%
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium dark:text-slate-100 text-gray-500">
            Registered Users
          </dt>

          <dd className="text-4xl font-extrabold text-indigo-600 md:text-5xl">
            500K+
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default StatComponents;
