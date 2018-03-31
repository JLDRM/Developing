var redis = require('redis')
client = redis.createClient();

client.on('connect', runSample);

function runSample() {
    // Set a value with an expiration
    client.set('string_key', 'Hello World', redis.print);
    // Expire in 5 seconds
    client.expire('string_key', 5);

    // This timer is only to demo the TTL
    // Runs every second until the timeout
    // occurs on the value
    var myTimer = setInterval(function() {
        client.get('string_key', function (err, reply) {
            if(reply) {
                console.log('I live: ' + reply.toString());
            } else {
                clearTimeout(myTimer);
                console.log('I expired');
                client.quit();
            }
        });
    }, 1000);
}