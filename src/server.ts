import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hey there');
})
export function listen() {
    app.listen(3000, () => {
        console.log('Server is running');
    })
}