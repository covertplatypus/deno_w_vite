import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Cat: () => void = (): void => {
    const { cat } = useParams()
    const [catToSee, setCatToSee] = useState()
    useEffect(() => {
        fetch(`http://localhost:8000/api/${cat}`)
          .then(async (res) => await res.json())
          .then((json) => setCatToSee(json));
      }, []);

        return (
            <div>
               <section>
                    <h1>{catToSee?.name}</h1>
                     <img src={catToSee?.image} />
                </section>
                <Link to='/'>Back to home</Link>
            </div>
        )
}

export default Cat