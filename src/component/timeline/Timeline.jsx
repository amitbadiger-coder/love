

const data =[
  { "date": "First Message", "text": "From Nidaoshi to Solapur... ❤️" },
  { "date": "Late Night Calls", "text": "ninnu tali tinnu cl gola.." },
  {
    "date":"ninu unlimited msgs!","text":"kare av barlilla andr ng jiva gamasalla"
  }
]

export default function Timeline() {
  return (
    <div className="timeline">
      {data.map((item, i) => (
        <div key={i} className="timeline-item">
          <h3>{item.date}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
