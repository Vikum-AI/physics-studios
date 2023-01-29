import Button from "../../components/button/Button";
import DisplayStats from "../display-stats/DisplayStats";

export default function MainInfo() {
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-4xl xs:text-5xl lg:text-4xl xl:text-5xl font-semibold text-left md:text-left text-slate-900 leading-[3.8rem]">
        A Simple Platform for All Your
        <span className="text-4xl xs:text-5xl lg:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] via-[#FF8C00] to-[#FF0080] mx-2 leading-[3.8rem]">
          Physics Learning
        </span>
        Needs.
      </h2>
      <section>
        <p className="text-slate-900 text-lg">
          “eLearning is changing. And, we will see new models, new technologies,
          and designs emerge. So, let’s drop the “e” – or at least give it a new
          and wider definition.”
        </p>
      </section>
      <section className="flex space-x-4">
        <Button label="Get Started" extras="py-3 rounded-lg px-5 w-32" />
        <Button
          label="Classes"
          extras="bg-red-200 py-3 rounded-lg px-5 text-red-500 w-32 hover:bg-red-300 hover:text-red-600"
        />
      </section>
      <section className="lg:hidden xl:block place-content-center">
        <DisplayStats />
      </section>
    </div>
  );
}
