import express from 'express';
const app = express();
export function listen() {
    app.listen(3000, () => {
        console.log('Server is running');
    })
}