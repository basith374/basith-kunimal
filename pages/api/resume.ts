import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const remoteUrl = 'https://raw.githubusercontent.com/basith374/basith374/main/Basith_cv_frontend.pdf';
    const pdfRes = await fetch(remoteUrl);

    if (!pdfRes.ok) {
        return res.status(500).send('Failed to fetch PDF');
    }

    const arrayBuffer = await pdfRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="sample.pdf"'); // key part!
    res.send(buffer);
}

