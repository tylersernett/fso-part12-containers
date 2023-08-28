const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const { getAsync, setAsync } = require('../redis')

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })

  // Increment the todo counter using setAsync
  const addedTodos = await getAsync('added_todos') ?? 0
  await setAsync('added_todos', parseInt(addedTodos) + 1)

  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200)
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const todo = await req.todo
  res.status(200).send(todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const updatedTodoData = req.body

  // Update the todo's properties with the new data
  req.todo.text = updatedTodoData.text || req.todo.text
  req.todo.done = updatedTodoData.done !== undefined ? updatedTodoData.done : req.todo.done

  await req.todo.save()
  res.status(200).send(req.todo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
