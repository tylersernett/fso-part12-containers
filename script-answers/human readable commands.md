# human readable commands
hours: 5 + 2.5 = 7.5
## 12_3
```bash
docker start -i festive_johnson
nano /usr/src/app/index.js
#nano caommands
console.log('Hello World')
^x
y
enter

exit
```

## 12_4
```bash
docker start -i festive_johnson
#install curl
apt-get -y install curl 
#install node
curl -sL https://deb.nodesource.com/setup_16.x | bash 
apt install -y nodejs
#test that node works
node /usr/src/app/index.js
exit
```

## 12_8
docker container ls   (get the id)
docker exec -it 04e414f785ba bash  (use -it flags: interactive, terminal emulation)
mongosh -u root -p example  (flags: pass in user and password values)
show dbs            (show all dbs)
use the_database    (switch active db to "the_database")
show collections    (show collections of the active db)
db.todos.find({})    (show all todos)
db.todos.insertOne( { text: "Increase the number of tools in my toolbelt" , done: false } )
db.todos.find({})   (check that above was added)

## 12_11
docker exec -it a78eb0dfe060 bash
redis-cli          (open redis CLI)
KEYS *              (get all keys)
GET added_todos         (get value of specific key)
SET added_todos 9001   (set value)
GET added_todos        (check that it worked)
DEL added_todos