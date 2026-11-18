// Utils

// Next

// Components

const PageHeader = ({ title }) => {
  return (
    <>
      <section className="flex flex-col items-center my-16 pageheaderbg py-6 h-60 justify-center">
        <h2 className="">{title}</h2>
        <span className=" bg-linear-(--gradient-line) h-0.5 w-40 m:w-50 lg:w-60 mt-8"></span>
      </section>
    </>
  );
};

export default PageHeader;
