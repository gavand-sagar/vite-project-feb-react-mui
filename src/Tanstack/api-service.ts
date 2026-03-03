import axios from "axios"

export function getUserWithUserIdParam({ queryKey }: { queryKey: any[] }) {
    // const param = queryKey[1]
    const [param] = queryKey
    return axios.get('/api/users/' + param)
        .then(x => x.data)
}
