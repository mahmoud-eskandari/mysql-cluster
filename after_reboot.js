try {
  print('Connecting to Primary server...\n');
  shell.connect('root@172.20.128.1:3306', os.getenv("MYSQL_ROOT_PASSWORD"))
  var cluster = dba.rebootClusterFromCompleteOutage();

    print(cluster.status())

} catch(e) {
  print('\nAn Error Occured: ' + e.message + '\n');
}
