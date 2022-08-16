let token = '8da3f40809a2090ebb3f17e392a11c2e324612134244bffe'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drinks-ct-kyle-frederick.herokuapp.com//api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch('https://drinks-ct-kyle-frederick.herokuapp.com//api/contacts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch('https://drinks-ct-kyle-frederick.herokuapp.com//api/contacts/${id}',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch('https://drinks-ct-kyle-frederick.herokuapp.com//api/contacts/${id}',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            }
        })
    }
}