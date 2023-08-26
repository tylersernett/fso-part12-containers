# human readable commands

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