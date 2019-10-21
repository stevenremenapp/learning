class AuthenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'authenticationError'
        this.favoriteSnack = 'grapes'
    }
}

// Can create different types of errors
class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'databaseError'
        this.favoriteSnack = 'raisins'
    }
}

const a = new AuthenticationError('oopsie');
a.favoriteSnack;
// throw new Error('this is a normal error');