function About() {
  return (
    <div className="p-8 md:p-12 lg:px-16 lg:py-24 ">
      <div className="max-w-lg text-center sm:text-left">
        <h2 className="text-2xl font-extrabold text-black sm:text-3xl md:text-5xl mb-2">
          About Page
        </h2>

        <p className="max-w-md text-black/90 md:mt-6 md:text-lg md:leading-relaxed md:block">
          BarbellFlies is a fitness wikipedia where you can find all the
          possible exercises that can be implemented in your next workout!
          <br />
          Suitable for beginners who are looking to create a customisable
          workout.
        </p>

        <div className="mt-4 sm:mt-8"></div>
      </div>
    </div>
    // <div>
    //   <h1>About Page</h1>
    //   <p>
    //     BarbellFlies is a fitness wikipedia where you can find all the possible
    //     exercises that can be implemented in your next workout!
    //     <br />
    //     Suitable for beginners who are looking to create a customisable workout.
    //   </p>
    // </div>
  );
}

export default About;
