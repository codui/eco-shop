import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/send-message', async (req, res) => {
    const { name, phone } = req.body;

    const message = `Ім'я покупця: ${name}\nНомер телефона: ${phone}`;
    const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;

    try {
        const response = await fetch(TELEGRAM_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text: message
            })
        });

        if (response.ok) {
            res.status(200).send('Message sent successfully');
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        res.status(500).send('Error sending message');
    }
});

export default app;
