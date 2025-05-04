import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const advertisement = req.body;
      
      // Create the data directory if it doesn't exist
      const dataDir = path.join(process.cwd(), 'data', 'advertisements');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      // Save the advertisement to a file
      const filePath = path.join(dataDir, `${advertisement.id}.json`);
      fs.writeFileSync(filePath, JSON.stringify(advertisement, null, 2));

      res.status(200).json({ message: 'Advertisement saved successfully' });
    } catch (error) {
      console.error('Error saving advertisement:', error);
      res.status(500).json({ error: 'Failed to save advertisement' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 