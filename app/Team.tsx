import React from 'react';

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
    name: 'Arthur Melo',
    role: 'Design Director',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    name: 'Olivia Wathan',
    role: 'Lead Designer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.',
    image: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  // Add more team members as needed
];

function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={member.image} alt={member.name} />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{member.name}</h1>

          <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{member.role}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{member.description}</p>

      <div className="flex mt-4 -mx-2">
        {/* Add social media links here */}
      </div>
    </div>
  );
}

function Team() {
  return (
    <div id="team">
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our <span className="text-blue-500">Executive Team</span></h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
