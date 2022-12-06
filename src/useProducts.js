import { useEffect, useState } from "react"
import Spin from "./Page/Spinner/Spinner"

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://assignment-11-server-production-4636.up.railway.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))




    }, [])

    return [products, setProducts]
}

export default useProducts