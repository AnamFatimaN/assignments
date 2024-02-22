const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 8000;

const sequelize = new Sequelize('my_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); // Set the views directory

app.get('/', function (req, res) {
  res.render('login', { error: null }); // Render the login.ejs file
});

// Insert data
app.post('/login', async function (req, res) {
  const { username, password } = req.body;

  try {
    await sequelize.sync(); // This creates the table if it doesn't exist

    const customer = await Customer.create({
      name: username,
      address: password,
    });

    res.send("Data inserted successfully");
  } catch (err) {
    console.error(err);
    res.send("Error inserting data");
  }
});

// Update data
app.post('/update', async function (req, res) {
  const { updateUsername, newPassword } = req.body;

  try {
    await sequelize.sync();

    const [updatedRowsCount] = await Customer.update(
      { address: newPassword },
      { where: { name: updateUsername } }
    );

    if (updatedRowsCount > 0) {
      res.send("Data updated successfully");
    } else {
      res.send("No matching record found for update");
    }
  } catch (err) {
    console.error(err);
    res.send("Error updating data");
  }
});

// Delete data
app.post('/delete', async function (req, res) {
  const { deleteUsername } = req.body;

  try {
    await sequelize.sync();

    const deletedRowsCount = await Customer.destroy({
      where: { name: deleteUsername },
    });

    if (deletedRowsCount > 0) {
      res.send("Data deleted successfully");
    } else {
      res.send("No matching record found for delete");
    }
  } catch (err) {
    console.error(err);
    res.send("Error deleting data");
  }
});

app.listen(port, function () {
  console.log(`${port} -> This port has been started`);
});
