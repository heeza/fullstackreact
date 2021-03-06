import proxy from 'http-proxy-middleware';

export default function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
}