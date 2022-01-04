const list = [
    {
        user: 'Johnny Tejada',
        username: 'johnnyfco',
        password: 'yo',
        emails: [
            "johnnyfran20002@gmail.com"
        ],
        src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F20%252F2021%252F02%252F26%252Fbruno-mars-2.jpg&q=85"
    },
    {
        user: 'Joe Biden',
        username: 'joebiden',
        password: 'joe',
        emails: [
            "johnnyfran20002@gmail.com"
        ],
        src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg"
    },
    {
        user: 'Marc Lopez',
        username: 'marcl454',
        password: 'lopez',
        emails: [
            "johnnyfran20002@gmail.com"
        ],
        src: "https://static.onecms.io/wp-content/uploads/sites/28/2021/05/04/mario-lopez-ML0521.jpg"
    }
]

export function GetAll() {return list}

export function Get(user_id) {return list[user_id]}

export function GetByUser(username) {return ({...list.find(x => x.username == username), password: undefined})}

export function Add(user){
    list.push(user)
    return {...user, password: undefined}
}

export function Delete(user_id){
    const user = list[user_id]
    list.splice(user_id, 1)
    return user
}

export function Login(username, password){
    console.log(username, password)
    const user = list.find(x => x.username == username)
    if(!user) throw {code:401, msg: 'no user found'}
    if(password != user.password) throw {code:401, msg:'Wrong password'}
    const data = {...user, password: undefined}
    return {user:data}
}