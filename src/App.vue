<template>
  <router-view/>
</template>

<script>
var mqtt = require('mqtt')

var options = {
   port: 8883,
    protocol: 'mqtts',
    username: 'firmanskuy',
    password: 'mohammad842'
}

// initialize the MQTT client
var client = mqtt.connect('wss://011e738922d942b9a991ee159b1a79a2.s1.eu.hivemq.cloud:8883',options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('firmanskuy');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('firmanskuy');

export default {
  data() {
    return {
    }
  },
}
</script>
<style>

body,
html {
  margin: 0;
  padding: 0;
  background-color: lightgrey;
  font-family: 'Poppins', sans-serif;
  height: 100vh;
}

.container {
  width: 428px;
  height: 100vh;
  background-color: #FCF8E8;
  margin: 0 auto;
  /* box-sizing: border-box; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #000000;
}

.desc {
  margin: 0;
  padding: 0;
}

.input {
  width: 322px;
  height: 65px;
  background: #D9D9D9;
  border-radius: 32px;
  border: 0;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
}

.input::placeholder {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  color: #000000;
}

.btn {
  width: 150px;
  height: 50px;
  border: none;
  background: #DF7861;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 5%;
}

@media screen and (max-width:400px) {
  .container {
    width: 100%;
    height: 100vh;
    background-color: #FCF8E8;
    margin: 0 auto;
    /* box-sizing: border-box; */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 1.5em;
  }

  .input {
    width: 80%;
    height: 10%;
    background: #D9D9D9;
    border-radius: 32px;
    border: 0;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .input::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;

    color: #000000;
  }

  .btn {
    width: 30%;
    height: 7%;
    border: none;
    background: #DF7861;
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 5%;
  }
}
</style>
