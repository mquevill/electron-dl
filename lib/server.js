import http from 'node:http';
import staticHandler from 'serve-handler';

const server = () => {
	http.createServer((request, response) => {
		request.addListener('end', () => {
			staticHandler(request, response, { public: './mock'});
		}).resume();
	}).listen(8080);
};

export default server;
