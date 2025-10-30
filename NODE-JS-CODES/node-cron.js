const cron = require('node-cron');

const MyScheduledTask = () => {
   console.log("Cron Job Executed at: ", new Date().toLocaleString());

};
       cron.schedule("* * * * *", MyScheduledTask);
    cron.schedule("0 * * * *", MyScheduledTask);