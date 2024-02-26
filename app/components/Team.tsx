import React from "react";

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    description: string;
    image: string;
  };
}

const teamMembers = [
  {
    name: "Raphael Kwadwo Aninakwa",
    role: "Managing Director (MD)",
    description:
      "Raphael Kwadwo Aninakwa is the dynamic leader at the helm of our company`s` journey. With over seven years of invaluable experience in [industry/field], he brings a wealth of knowledge and a visionary outlook to our team. Raphael is dedicated to propelling our company forward with innovation, strategic direction, and a steadfast commitment to excellence.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "kaytee",
    role: "Chief Operations Officer (COO)",
    description:
      "Kaytee, our COO, brings nine years of invaluable experience to our executive team. As a male leader, he is instrumental in optimizing our operational processes to maximize efficiency and productivity. With a track record of streamlining workflows and implementing strategic initiatives, Kaytee plays a crucial role in driving the day-to-day operations of our firm.",
    image:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  // Add more team members as needed
];

function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="max-w-screen-xl px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary dark:border-gray-700 dark:hover:border-transparent">
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={member.image}
          alt={member.name}
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
            {member.name}
          </h1>

          <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            {member.role}
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
        {member.description}
      </p>

      <div className="flex mt-4 -mx-2">{/* Add social media links here */}</div>
    </div>
  );
}

function Team() {
  return (
    <div id="team">
      <div className="">
        <div className="container max-w-screen-xl px-6 py-10 mx-auto">

        <div className="flex mt-8 mb-8 items-center justify-center p-10 mx-1 md:mx-10 h-96">
            <blockquote className="relative text-white text-center p-10 w-full m-1 bg-gradient-to-r from-primary to-transparent via-transparent">
                <span className="absolute top-0 left-0 -ml-8 mt-1 text-primary text-6xl">&ldquo;</span>
                It’s good to meet you, Dr. Banner. Your work on anti-electron collisions is unparalleled. And I’m a huge
                fan of the way you lose control and turn into an enormous green rage monster.
                <cite> - Tony Stark</cite>
                <span className="absolute bottom-0 right-0 -mr-8 mb-1 text-primary text-6xl">&rdquo;</span>

            </blockquote>
          </div>
          <h1 className="text-2xl font-semibold  text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our <span className="text-primary">Executive Team</span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Meet Our Executive Team: Passionate leaders dedicated to driving our
            vision forward with expertise and innovation.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
