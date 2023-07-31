import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ApartmentsPage = () => {
  const [apartments, setApartments] = useState([])

  async function getApartments() {
    try {
      const response = await fetch('https://ironbnb-m3.herokuapp.com/apartments')
      if (response.status === 200) {
        const apartments = await response.json()
        setApartments(apartments)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getApartments()
  }, [])

  return (
    <>
      <h1>All the apartments</h1>
      {apartments.map(oneApartment => (
        <Link
          to={`/apartments/${oneApartment._id}`}
          key={oneApartment._id}
          style={{ display: 'block', border: '1px solid lightgrey', margin: '1rem 0' }}
        >
          <h2>{oneApartment.title}</h2>
          <img style={{ width: '150px' }} src={oneApartment.img} alt={oneApartment.title} />
          <p>{oneApartment.pricePerDay}€/day</p>
        </Link>
      ))}
    </>
  )
}

export default ApartmentsPage
