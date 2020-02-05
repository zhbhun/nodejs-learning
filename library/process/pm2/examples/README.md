## 测试热重载

- pm2 start test.js -i 2 -k 15000
- pm2 reload test
- pm2 stop test
- pm2 delete test

## 测试日志

- pm2 start log.js -l log.txt -o log.out.txt -e log.error.txt --time --log-date-format "YYYY-MM-DD HH:mm:ss Z"
