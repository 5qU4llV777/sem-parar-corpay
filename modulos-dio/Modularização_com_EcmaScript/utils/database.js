const databaseType = {
    usertype: "admin",
    typeData: "datalocal",
  

};


async function connectToDatabase(dataName) {
  // Implementation for connecting to the database
  console.log(`Connecting to database: ${dataName}`);
}

async function disconnectFromDatabase() {
  // Implementation for disconnecting from the database
  console.log("Disconnecting from database");
}

export { connectToDatabase, disconnectFromDatabase, databaseType };//exporta por objetos
