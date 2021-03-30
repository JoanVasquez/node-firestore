const firebaseDB = require("../../databases/firebase.db");
const constactsRef = firebaseDB.collection("contacts");

const listContactDao = async () => {
  const data = [];

  const snapshot = await constactsRef.get();
  if (snapshot.empty) {
    return data;
  }

  snapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data;
};

const createContactDao = async (data) => {
  const res = await constactsRef.add(data);
  data.id = res.id;
  return data;
};

const updateContactDao = async (data) => {
  await constactsRef.doc(data.id).set(data);
  return data;
};

const deleteContactDao = async (id) => {
  const isDelete = false;
  //await
};

module.exports = {
  listContactDao,
  createContactDao,
  updateContactDao,
};
