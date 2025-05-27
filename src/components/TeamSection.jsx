import React from "react";

const teamMembers = [
    {
        name: "John Carter",
        position: "CEO & Founder",
        image: "https://html.webtend.net/omnivus/assets/img/team/team-03.jpg",
    },
    {
        name: "Alex Smith",
        position: "Lead Developer",
        image: "https://html.webtend.net/omnivus/assets/img/team/team-02.jpg",
    },
    {
        name: "Emily Johnson",
        position: "Project Manager",
        image: "https://html.webtend.net/omnivus/assets/img/team/team-02.jpg",
    },
    {
        name: "Michael Lee",
        position: "UI/UX Designer",
        image: "https://html.webtend.net/omnivus/assets/img/team/team-01.jpg",
    },
];

const socialIcons = [
    {
        name: "LinkedIn",
        href: "#",
        svg: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "#",
        svg: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "#",
        svg: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
            </svg>
        ),
    },
];

const TeamSection = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h5 className="text-blue-700 font-semibold tracking-widest uppercase mb-2 text-sm">
                    Our Team Member
                </h5>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Meet Our Exclusive <br />
                    Leadership
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-center">
                {teamMembers.slice(0, 4).map((member, idx) => (
                    <div
                        key={idx}
                        className="group bg-gray-50 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 w-[290px] h-[440px] mx-auto overflow-hidden relative"
                    >
                        <div className="relative w-full h-[270px] flex-shrink-0">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                            />

                            <div className="absolute left-0 right-0 top-[65%] flex items-center justify-center bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <div className="flex gap-5">
                                    {socialIcons.map((icon, i) => (
                                        <a
                                            key={i}
                                            href={icon.href}
                                            aria-label={icon.name}
                                            className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-800 transition text-xl"
                                        >
                                            {icon.svg}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto w-full bg-white py-8 flex flex-col items-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-gray-500 text-sm">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TeamSection;
