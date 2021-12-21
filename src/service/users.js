const list = [
    {
        user: 'Johnny Tejada',
        username: 'johnnyfco',
        password: 'yo',
        emails: [
            "johnnyfran20002@gmail.com"
        ]
    }
]

export function GetAll() {return list}

export function Get(user_id) {return list[user_id]}

export function GetByUN(username) {return ({...list.find(x => x.username == username), password: undefined})}

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