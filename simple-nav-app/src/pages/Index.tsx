import React, { useEffect, useState} from 'react'
import { Link} from 'react-router-dom'

const Index: () => void = (): void => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8000/api/`)
          .then(async (res) => await res.json())
          .then((json) => setCats(json))
      }, []);

        return (
            <div>
                <h1>Check out these cats!</h1>
                <h5>Select one from below</h5>
                {cats.map((cat: any): any => {
                    return (
                        <div>
                            <Link to={`/${cat.id}`} key={cat.id} >{cat?.name}</Link>
                        </div>
                    )
                } )}
            </div>
        )
}

export default Index