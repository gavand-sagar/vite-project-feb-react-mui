import axios from "axios"

export function getUserWithUserIdParam({ queryKey }: { queryKey: any[] }) {
    // const param = queryKey[1]
    const [param] = queryKey
    return axios.get('https://dummyjson.com/users/' + param)
        .then(x => x.data)
}
