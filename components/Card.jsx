export default function Card({ icon, duration, name, title, degree, detail }) {
  return (
    <div className="lg:text-2xl flex flex-col items-start space-y-3">
      <div className="flex items-center space-x-4">
        {icon}
        <span>{duration}</span>
      </div>
      <div className="ml-9 space-y-2">
        <h3 className="font-extrabold">{name}</h3>
        <p>{title}</p>
        <p>{degree}</p>
        <p>{detail}</p>
      </div>
    </div>
  );
}