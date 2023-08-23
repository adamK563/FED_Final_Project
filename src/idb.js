const idb = {
  async createDB(databaseName, version) {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(databaseName, version);

      request.onerror = (event) => {
        console.error("Error opening database:", event.target.error);
        reject(event.target.error);
      };

      request.onsuccess = (event) => {
        const db = event.target.result;
        resolve(db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains("appointments")) {
          db.createObjectStore("appointments", {
            keyPath: "id",
            autoIncrement: true
          });
        }

        if (!db.objectStoreNames.contains("expenses")) {
          db.createObjectStore("expenses", {
            keyPath: "id",
            autoIncrement: true
          });
        }

        // Add more object stores if needed
      };
    });
  },

  async addAppointment(appointment) {
    const db = await this.createDB("appointmentsDB", 1);
    const transaction = db.transaction(["appointments"], "readwrite");
    const store = transaction.objectStore("appointments");
    store.add(appointment);
  },

  async addExpense(expense) {
    const db = await this.createDB("expensesDB", 1);
    const transaction = db.transaction(["expenses"], "readwrite");
    const store = transaction.objectStore("expenses");
    store.add(expense);
  }

  // Add more methods for working with IndexedDB
};

export default idb;
