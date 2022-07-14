const { uuid } = require('uuidv4');
const contacts = [
  {
    id: uuid(),
    name: 'Anderson',
    email: 'anderson@mail.com',
    phone: '1199999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}
module.exports = new ContactsRepository();
