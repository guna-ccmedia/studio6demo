const TitleHeading = ({ type, className, children }) => {
  return (
    <div>
      <h2
        className={`lg:text-3xl md:text-2xl text-xl font-bold uppercase ${className}`}
      >
        {children}
      </h2>
    </div>
  );
};

const SubTitleHeading = ({ type, className, children }) => {
  return (
    <div>
      <h2 className={`lg:text-2xl md:text-2xl text-xl font-bold ${className}`}>
        {children}
      </h2>
    </div>
  );
};

export { TitleHeading, SubTitleHeading };
