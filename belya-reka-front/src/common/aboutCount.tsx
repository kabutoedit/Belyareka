import type { FC } from "react";
import CountUp from "react-countup";

const aboutCount = [
  { count: 15_000_000, descr: "литров молока", prefix: undefined },
  { count: 15_000, descr: "сотрудников", prefix: undefined },
  { count: 8_000, descr: "гектаров выпасной земли", prefix: undefined },
  { count: 15, descr: "регионов продаж", prefix: undefined },
];

const AboutCount: FC = () => (
  <section>
    <ul className="grid md:grid-cols-4 grid-cols-1 2xl:gap-y-0 gap-y-10 gap-5">
      {aboutCount?.map((elem, i) => (
        <li className="text-left" key={i}>
          <h1 className="2xl:text-6xl text-5xl font-bold text-hexahrome">
            <CountUp separator=" " prefix={elem.prefix} duration={5} end={elem.count} />
          </h1>
          <span className="text-xl text-ghost font-medium">{elem.descr}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default AboutCount;
