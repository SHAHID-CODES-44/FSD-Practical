const db = mysql.createConnection({
  host: "localhost",
  user: "root",           
  password: "3826",   
  database: "tybcafsd29"  
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database tybcafsd29");
});
