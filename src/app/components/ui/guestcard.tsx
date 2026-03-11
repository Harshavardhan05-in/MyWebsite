export default function GuestCard({ image, name, title, role, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-105 flex flex-col items-center text-center">

      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover object-[40%_50%] border-4 border-indigo-400 shadow-lg"
      />

      <h2 className="text-xl font-bold text-center mt-4 text-white">
        {name}
      </h2>

      <p className="text-center text-indigo-300 text-sm">
        {title}
      </p>

      <span className="block text-center mt-2 text-xs px-3 py-1 bg-indigo-500/30 rounded-full w-fit mx-auto text-indigo-200">
        {role}
      </span>

      <p className="text-center text-gray-300 text-sm mt-3">
        {description}
      </p>
    </div>
  );
}