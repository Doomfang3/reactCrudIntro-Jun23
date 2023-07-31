import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

/* Fetch your data */
const fetchApartment = async (setter, id) => {
  const response = await fetch(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
  if (response.status === 200) {
    const apartment = await response.json()
    setter(apartment)
  }
}

const ApartmentsDetailsPage = () => {
  const { apartmentId } = useParams()

  const [apartment, setApartment] = useState(null)

  useEffect(() => {
    fetchApartment(setApartment, apartmentId)
  }, [])

  return apartment ? (
    <div>
      <h1>{apartment.title}</h1>
      <img src={apartment.img} alt={apartment.title} />
      <p>Price per day: {apartment.pricePerDay}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default ApartmentsDetailsPage
