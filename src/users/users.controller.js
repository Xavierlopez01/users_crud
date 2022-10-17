constuuid= require('uuid')

const userDB = [
    {
        id: "bf4dbd8a-de57-47bf-9cca-11e66f003fc3",
        first_name: "Xavier",
        last_name: "Lopez",
        email: "xavier@lopez.com",
        password: "root",
        birthday: "1986/07/22"
    },
    {
        id: "a69459d3-3a39-413a-a979-3a799341d643",
        first_name: "Jesus",
        last_name: "Tovar",
        email: "jesus@tovar.com",
        password: "root1",
        birthday: "1986/07/22"
    }
];

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const data = userDB.find(user => user.id === id)
    return data
}

const createNewUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_nama: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    userDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser
}