var PassWord = "mysql"
var clusterName = "boomCluster"

try {
  print('Connecting to Primary server...\n');
  shell.connect('root@s1:3306', PassWord)
  var cluster = dba.createCluster(clusterName);

  print('Adding instance #2');
  cluster.addInstance({user: "root", host: "s2", password: PassWord})
  print('...');

  print('Adding instance #3');
  cluster.addInstance({user: "root", host: "s3", password: PassWord})
  print('\nSuccessfully Done!.\n');

} catch(e) {
  print('\nAn Error Occured: ' + e.message + '\n');
}
