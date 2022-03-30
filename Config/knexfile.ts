
module.exports = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "testhotel"
  },
  migrations: {
    directory: __dirname + '/migrationss'
  },
  useNullAsDefault: true
}