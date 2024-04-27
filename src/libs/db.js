import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: 'Pepe.2013!',
        port: 3306,
        database: 'coffeetech'
    }
})