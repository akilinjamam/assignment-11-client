import { useEffect, useState } from "react"
import Spin from "./Page/Spinner/Spinner"

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://peaceful-headland-64387.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))



    }, [])

    return [products, setProducts]
}

export default useProducts