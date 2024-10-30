const { db } = require('../db/connection');
const User = require('./models/User');

async function main() {
    await db.sync();

    // Create a new user
    await User.create({
        username: "JRSkates", 
        email: "jrskates@gmail.com", 
        password: "test123",
    })


    // Read
    const result1 = User.findAll({where: {username: "JRSkates"}});
    const result2 = User.findOne({where: {email: "jrskates@gmail.com"}});
    const result3 = User.findByPk(1);


    // Update
    const updatedResult = await User.update(({username: "JackSka"}), {where: {username: "JRSkates"}});


    // Delete
    const deleteResult = await User.destroy({where: {email: "jrskates@gmail.com"}})
}

main();
