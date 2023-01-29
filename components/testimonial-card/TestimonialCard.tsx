import { Avatar } from "@mantine/core";
import ITestimonialCard from "./ITestimonialCard";

const TestimonialCard = ({
  name,
  title,
  description,
  image,
}: ITestimonialCard) => (
  <div className="bg-white w-96 p-6 rounded-lg h-fit">
    <section>
      <div className="flex space-x-2">
        <Avatar size="lg" radius="xl" src={image ?? null} alt={name} />
        <div>
          <h3 className="text-slate-900 font-semibold">{name}</h3>
          <p className="text-slate-400 text-sm">{title}</p>
        </div>
      </div>
    </section>
    <section>
      <p className="text-slate-700 mt-4">{description}</p>
    </section>
  </div>
);

export default TestimonialCard;
