const { spawn }  = require('child_process');

const args = ['start'];
const opts = {
	cwd: 'client',
	stdio: 'inherit',
	shell: true
}
//在client目录运行命令
spawn('npm', args, opts);