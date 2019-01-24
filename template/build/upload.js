var shell = require('shelljs')
shell.config.verbose = true

shell.exec('ssh root@{{apiurl}} " mkdir -p /usr/share/websites/{{name}} "')

shell.exec('scp -r dist/* root@{{apiurl}}:/usr/share/websites/{{name}}/')
