export default function Cards({ icon, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center shadow rounded-lg bg-person-primary text-person-secondary p-4">
      <div className="mb-4 text-ton-200 p-4">{icon}</div>
      <p className="text-left font-ton font-bold text-lg">{title}</p>
      <p className="text-center">{description}</p>
    </div>
  )
}
