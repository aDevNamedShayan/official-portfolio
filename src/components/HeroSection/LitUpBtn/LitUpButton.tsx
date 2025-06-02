export function LitUpButton() {
  return (
    <button className="max-w-fit p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500 rounded-lg animate-gra" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        Download CV
      </div>
    </button>
  );
}