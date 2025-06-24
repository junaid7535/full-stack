import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send('Server is ready');
});

app.get('/api/apiData',(req,res) => {
    const apiData = [
          {
            id: 1,
            title: 'Do something nice for someone you care about',
            content : 'this is content',
          },
          {
            id : 18,
            title : 'Draw and color a Mandala',
            content : 'this is content',
          }
        ];

    res.send(apiData);
});

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Serve at http://localhost: ${port}`);
});