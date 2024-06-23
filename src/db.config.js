import pkg from 'pg'

const { Pool } = pkg

const pool = newpool({
    user: 'postgres',
    host: 'localhost',
    database: 'product_v1',
    password: 'GOAT',
    port: 5432

})

export default pool