const { Client } = require('pg');

const connectionString = 'postgresql://postgres.aycpiliahzugvwtvdjdc:EXnoEhoz8xOfVMyS@aws-0-us-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true';

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
        console.error('❌ Connection failed:', err.message);
        process.exit(1);
    }
}

testConnection();
