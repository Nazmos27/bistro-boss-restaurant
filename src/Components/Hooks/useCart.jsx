import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"

const useCart = () => {
    const {user} = useContext(AuthContext)
    const {refetch, data : cart = []} = useQuery({       //here data: cart = [] means that value of data obj is cart but initial value of cart is empty array 
        queryKey:['carts' , user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        }

    })
    return [cart,refetch]
}
export default useCart