import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewApartment = () => {
  const navigate = useNavigate()

  const [img, setImg] = useState('')
  const [title, setTitle] = useState('')
  const [pricePerDay, setPricePerDay] = useState(0)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await fetch('https://ironbnb-m3.herokuapp.com/apartments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ img, title, pricePerDay }),
      })
      console.log(response)
      if (response.status === 200) {
        const parsed = await response.json()
        console.log(parsed)
        // Logic to navigate to the newly created apartment
        // navigate(`/apartments/${parsed._id}`)
        // Logic to empty your state to have a clean form
        setImg('')
        setTitle('')
        setPricePerDay(0)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>New Apartment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Image link :
          <input value={img} onChange={event => setImg(event.target.value)} />
        </label>
        <label>
          Title :
          <input value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label>
          Price per day :
          <input
            type='number'
            value={pricePerDay}
            onChange={event => setPricePerDay(event.target.value)}
          />
        </label>

        <button type='submit'>Create new apartment</button>
      </form>
    </>
  )
}

export default NewApartment
