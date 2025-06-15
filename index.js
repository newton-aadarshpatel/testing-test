import express from 'express';
const PORT = 3000;

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
}
);

app.post('/data', (req, res) => {
  const { num1, num2 } = req.body;
  const ans = num1 * num2;
  return res.status(200).json({answer: ans});
}
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});          

export default app;