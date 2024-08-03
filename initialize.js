try {
  print('Connecting to Primary server...\n');
  shell.connect('root@172.20.128.1:3306', os.getenv("MYSQL_ROOT_PASSWORD"))
  var cluster = dba.createCluster(os.getenv("MYSQL_CLUSTER_NAME"));

  print('Adding instance #2');
  cluster.addInstance({user: "root", host: "172.20.128.2", password: os.getenv("MYSQL_ROOT_PASSWORD")})
  print('...');

  print('Adding instance #3');
  cluster.addInstance({user: "root", host: "172.20.128.3", password: os.getenv("MYSQL_ROOT_PASSWORD")})
  print('\nSuccessfully Done!.\n');

} catch(e) {
  print('\nAn Error Occured: ' + e.message + '\n');
}
