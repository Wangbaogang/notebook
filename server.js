const { spawn }  = require('child_process');

const args = ['app'];
const opts = {
	cwd: 'server',
	stdio: 'inherit',
	shell: true
}
//在client目录运行命令
spawn('node', args, opts);