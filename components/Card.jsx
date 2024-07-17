export default function Card({ icon, duration, name, major, title, detail }) {
  return (
    <div className="lg:text-2xl flex flex-col items-start space-y-3">
      <div className="flex items-center space-x-4">
        {icon}
        <span>{duration}</span>
      </div>
      <div className="ml-9 space-y-2">
        <h3 className="font-extrabold">{name}</h3>
        <div className="flex flex-col md:flex-row lg:flex-row">
            <p className="flex-col">{major}</p>
            <p className="flex-col">{title}</p>
        </div>
        <p>{detail}</p>
      </div>
    </div>
  );
}