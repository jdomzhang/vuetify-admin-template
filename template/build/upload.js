var shell = require('shelljs')
shell.config.verbose = true

shell.exec('ssh {{root}} " mkdir -p /usr/share/websites/{{name}} "')

shell.exec('scp -r dist/* {{root}}:/usr/share/websites/{{name}}/')
