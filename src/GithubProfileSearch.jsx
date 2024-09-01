import { useState, useEffect } from 'react';
import axios from 'axios'
import GHsearch from './GHsearch';
const urlApi = "https://api.github.com/users/"
import './github.css'


export default function GithubProfileSearch() {
    const [username, setUsername] = useState('vicky-at-web');
    const [profile, setProfile] = useState({ data: null, isLoading: true })


    const fetchUser = async () => {
        const res = await axios.get(`${urlApi}${username}`)
        console.log(res)
        setProfile({ data: res.data, isLoading: false })
    }

    useEffect(() => {
        fetchUser()
    }, [username])


    const search = (username) => {
        setProfile({ data: null, isLoading: true })
        setUsername(username)
    }

    if (profile.isLoading) return <i>Loading........:(</i>

    return (
        <div>
            <GHsearch search={search} />
            <h1>{profile.data.name}</h1>
            <img className='avatar' src={profile.data.avatar_url} />
            <p>{profile.data.bio}</p>
            <a href={profile.data.html_url}>Visit official github site</a>
        </div>
    )

}
