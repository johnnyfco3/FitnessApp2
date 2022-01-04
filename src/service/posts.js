const list = [
    {
        id: 1,
        username: "johnnyfco",
        src: "https://player.vimeo.com/external/392189901.sd.mp4?s=d4c7cadaa4fdf432eb4090af91c652ce677ce319&profile_id=139&oauth2_token_id=57447761",
        caption: "What better way to relax"
    },
    {
        id: 2,
        username: "joebiden",
        src: "https://player.vimeo.com/external/420459266.sd.mp4?s=2e0eeba368d0533383e3b036410acecdc6d6b533&profile_id=139&oauth2_token_id=57447761",
        caption: "Reach for the SKYYY!"
    },
    {
        id: 3,
        username: "mark934",
        src: "https://player.vimeo.com/external/458027212.sd.mp4?s=57cf6d85427030d008a48a64a5267c9a3821bd55&profile_id=139&oauth2_token_id=57447761",
        caption: "Breakdancing helps the core as well"
    }
]

export function GetAll() {return list}

export function Get(pid) {return list[pid]}

export function GetByUser(user) {return ({...list.find(x => x.username === user)})}

export function Add(post){
    list.push(post)
    return {...list}
}

export function Delete(pid){
    const post = list[pid]
    list.splice(pid,1)
    return post
}



