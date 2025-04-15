import { useEffect, useState } from "react"

export const PromiseError = () => {
    const [data,setData] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(()=>{
        const fetchData = async () => {
            try{
                throw new Error ("La promesa se hizo puff")
            }catch(err) {
                if(err instanceof Error){
                    setError(err.message)
                }
            }
            
        }
        fetchData()
    })
    if(error){
        return <div>Algo salio mal: {error}</div>
        throw error
    }
    return <div>{data}</div>
}
