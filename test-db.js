const { Client } = require('pg');

const connectionString = 'postgresql://postgres:EXnoEhoz8xOfVMyS@db.aycpiliahzugvwtvdjdc.supabase.co:5432/postgres?sslmode=require';

const client = new Client({
    connectionString: connectionString,
    connectionTimeoutMillis: 10000,
});

async function testConnection() {
    try {
        console.log('Attempting to connect to Supabase...');
        await client.connect();
        console.log('✅ Connection successful!');
        const res = await client.query('SELECT NOW()');
        console.log('Current time from DB:', res.rows[0].now);
        await client.end();
    } catch (err) {
        console.error('❌ Connection failed:');
        console.error(err);
        process.exit(1);
    }
}

testConnection();
