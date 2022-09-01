function Homepage() {
  return (
    <aside className="overflow-hidden bg-[url(https://i.kym-cdn.com/entries/icons/original/000/009/740/DoULift.jpg)] bg-center bg-no-repeat bg-cover ">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-slate-900/30">
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-5xl mb-2">
            Welcome to BarbellFlies
          </h2>

          <p className="max-w-md text-white/90 md:mt-6 md:text-lg md:leading-relaxed md:block">
            Do You Even Lift? (DYEL) is a condescending expression used on body
            building and fitness forums to question the legitimacy of someone
            fitness expertise or weight lifting routine.
          </p>

          <div className="mt-4 sm:mt-8"></div>
        </div>
      </div>
    </aside>
  );
}

export default Homepage;
