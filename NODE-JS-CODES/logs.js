var log = {

   info: function (info) {
      const message = "Info : " + info;
      console.log('info: ' + info);
      return message;
   },
   warning: function (warning) {
      const message = "Warning : " + warning;
      console.log('Warning' + warning);
      return message;
   },
   error: function (error) {
      const message = "Error" + error;
      console.log('Error' + error);
      return message;
   },

}

module.exports.log = log;