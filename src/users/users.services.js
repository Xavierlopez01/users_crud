const usersControllers = require('./users.controller')

const getUsers = (req, res) => {
    const data = usersControllers.getAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = reqw.params.id
    const data = usersControllers.getUserById(id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ message: 'Invalid ID' })
    }
}

const postNewUser = (req, res) => {
    const data = req.body

    if(data.first_name && data.last_name && data.email && data.password && data.birthday){
        const response = usersControllers.createNewUser(data)
        res.status(201).json(response)
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
}
module.exports = {
    getUsers,
    getUserById,
    postNewUser
}