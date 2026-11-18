// Utils

// Next

// Components

const SectionGeneral = ({ title, children }) => {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="w-fit items-center flex flex-col mb-16">
          <h2>{title}</h2>
          <span className="bg-linear-(--gradient-line) h-0.5 w-40 m:w-50 lg:w-60 mt-8"></span>
        </div>
        {children}
      </section>
    </>
  );
};

export default SectionGeneral;
