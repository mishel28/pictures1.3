import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=NrPWI50crXqoBrN4wS_OFDkT18hA9RZ3tMt6fPKlng4'
    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(term)
    console.log(response.data.results)

    return response.data.results
}


export default searchImage