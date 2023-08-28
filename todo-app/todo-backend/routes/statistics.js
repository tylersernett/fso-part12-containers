const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

router.get('/', async (_, res) => {
  const addedTodos = await getAsync('added_todos') ?? 0;
  res.json({ added_todos: parseInt(addedTodos) }).status(200);
});

module.exports = router;