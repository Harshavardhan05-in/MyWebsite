import GuestCard from "../components/ui/guestcard"

export const  Guests = () => {
  const guests = [
    {
      name: "Prof. A. Govardhan",
      title: "Vice Chancellor RGUKT Basar",
      role: "Chief Guest",
      image: "/guests/vc.jpeg",
      description:
        "B.E.(CSE)(OU, Hyd), M.Tech(CS)(JNU, New Delhi), Ph.D(CSE)(JNTU, Hyd), PGDL(Leadership)(EMERITUS, Singapore),FIE, FCSI, C.Eng, FIETE, FISDS, FCSRC.MACM, MSIGKDD, SMIACSIT, MIAENG, MWASET, LMISTE, MFSF, MAAAS"
    },
    {
      name: "Prof.E.Murali Dharshan",
      title: "Administrative Officer Rgukt Basar",
      role: "Special Guest",
      image: "/guests/osd.jpeg",
      description:
        "Technology leader transforming the future of AI and cloud computing."
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6">

      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Our Distinguished Guests
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {guests.map((guest, index) => (
          <GuestCard key={index} {...guest} />
        ))}
      </div>
    </div>
  );
}