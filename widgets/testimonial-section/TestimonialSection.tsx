import ITestimonialCard from "../../components/testimonial-card/ITestimonialCard";
import TestimonialCard from "../../components/testimonial-card/TestimonialCard";

const TestimonialSection = () => {
  const sampleTestimonials: ITestimonialCard[] = [
    {
      name: "Dineth de Silva",
      description:
        "Within the span of two years that I learnt from Mr Malith Withaanarachchi, the most important characteristic that I was able to witness through his teaching is his uncanny ability to be compatible with his student's mind. ",
      title: "Student",
    },
    {
      name: "Shayani de silva",
      description:
        "During the 2 years that I spent as a student of Sir Malith’s, I learnt that the commitment he showed in teaching coupled with his innovative methods made studying the subject a fruitful and unforgettable experience. Sir Malith’s enthusiasm and zeal never faded, be it online lessons or offline, he was always well motivated, cheerful and helpful.",

      title: "Student",
      image: "/img/Testimonials/test-1.jpeg",
    },
    {
      name: "Sahda Haroon",
      description:
        "I joined Lyceum International School, Wattala, for my A-levels and was put into Mr. Malith’s class for physics. He is one of those teachers who teach physics through real-life examples and applications rather than textbooks. ",

      title: "Student",
      image: "/img/Testimonials/test-2.jpeg",
    },
  ];

  return (
    <>
      <h2 className="mt-20 mb-10 text-3xl text-center font-medium">
        Loved By Students
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 mx-20 overflow-hidden">
        {sampleTestimonials.map((item) => (
          <TestimonialCard
            key={item.name}
            title={item.title}
            description={item.description}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default TestimonialSection;
