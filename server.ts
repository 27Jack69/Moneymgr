import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running normally' });
});

app.get('/api/transactions', (req, res) => {
  res.json([
    { id: '1', type: 'expense', category: 'Food', amount: 15.50, date: new Date().toISOString() }
  ]);
});

app.post('/api/transactions', (req, res) => {
  const { type, category, amount, date, description } = req.body;
  res.status(201).json({ 
    id: Math.random().toString(36).substring(2, 9),
    type,
    category, 
    amount,
    date,
    description,
    status: 'saved_to_backend'
  });
});

app.get('/api/budgets', (req, res) => {
  res.json([]);
});

app.get('/api/goals', (req, res) => {
  res.json([]);
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, () => {
    console.log(`Backend server listening on port ${port}`);
  });
}

startServer();
