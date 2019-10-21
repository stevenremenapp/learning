const handleSignin = (req, res, db, bcrypt) => {
    // Load hash from your password DB.
    // bcrypt.compare("apples", '$2a$10$pkf/cdBZjTj9vgZtLkwPL.lG9FiN2CGHhzssY3uv735eTR5wZsbMW', function(err, res) {
    //     console.log('first guess', res);
    // });
    // bcrypt.compare("veggies", '$2a$10$pkf/cdBZjTj9vgZtLkwPL.lG9FiN2CGHhzssY3uv735eTR5wZsbMW', function(err, res) {
    //     console.log('second guess', res);
    // });
    const { email, name, password } = req.body;
    if (!email || !password) {
        return res.status(400).json('incorrect form submission');
    }
    db.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {
            // console.log(data);
            const isValid = bcrypt.compareSync(password, data[0].hash);
            console.log(isValid);
            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', email)
                    .then(user => {
                        console.log(user);
                        res.json(user[0])
                    })
                    .catch(err => res.status(400).json('Unable to get user'));
            } else {
                res.status(400).json('Wrong credentials');
            }
        })
    .catch(err => res.status(400).json('Wrong credentials'));
};

module.exports = {
    handleSignin: handleSignin
}