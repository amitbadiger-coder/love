import first from "../../images/first.jpeg"
import second from "../../images/second.jpeg"
import "../assets/styles/memory.css"

const memories = [
  { "image": first , "caption": "Worth every mile" },
  { "image": second, "caption": "Still us" }
]

const MemoryGallary = () => {
  return (
    <div className="gallery">
      {memories.map((m, i) => (
        <div key={i} className="gallery-item">
          <img src={m.image} alt="" />
          <p>{m.caption}</p>
        </div>
      ))}
    </div>
  )
}

export default MemoryGallary
