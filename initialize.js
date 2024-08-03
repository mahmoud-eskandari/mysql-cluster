var PassWord = "mysql"
var clusterName = "boomCluster"

try {
  print('Connecting to Primary server...\n');
  shell.connect('root@172.20.128.1:3306', PassWord)
  var cluster = dba.createCluster(clusterName);

  print('Adding instance #2');
  cluster.addInstance({user: "root", host: "172.20.128.2", password: PassWord})
  print('...');

  print('Adding instance #3');
  cluster.addInstance({user: "root", host: "172.20.128.3", password: PassWord})
  print('\nSuccessfully Done!.\n');

} catch(e) {
  print('\nAn Error Occured: ' + e.message + '\n');
}
