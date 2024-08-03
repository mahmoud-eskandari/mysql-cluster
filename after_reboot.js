var PassWord = "mysql"
var clusterName = "boomCluster"

try {
  print('Connecting to Primary server...\n');
  shell.connect('root@172.20.128.1:3306', PassWord)
  var cluster = dba.rebootClusterFromCompleteOutage();

    print(cluster.status())

} catch(e) {
  print('\nAn Error Occured: ' + e.message + '\n');
}
