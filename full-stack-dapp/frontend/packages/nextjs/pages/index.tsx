import type { NextPage } from "next";
import { PageBody } from "~~/components/ballot/PageBody";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
        <h1 className="text-center mb-8">
  <span className="block text-5xl font-bold">Week 4 Project </span>
</h1>
          <PageBody></PageBody>
        </div>
      </div>
    </>
  );
};

export default Home;