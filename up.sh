docker compose up -d s1 s2 s3

sleep 10
docker compose exec -it s1 mysqlsh "root@s1:3306" --password="mysql" -f "/var/after_reboot.js" 

sleep 5

docker compose up -d router