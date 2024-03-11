import { NextApiRequest, NextApiResponse } from 'next';
import fsPromises from 'fs/promises';
import path from 'path';
import { promises as fs } from 'fs';

const dataFilePath = path.join(process.cwd(), './api/guestData.json');

export async function POST(req: Request) {
    try {
        // Read the existing data from the JSON file
        const jsonData: any = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);
        console.log(objectData)

        // Get the data from the request body
        const { name, attendance, message } = await req.json()

        const currentDate = new Date();
        const isoDate = currentDate.toISOString();
        const isoDateWithMilliseconds = isoDate.slice(0, -1) + currentDate.getMilliseconds() + isoDate.slice(-1);

        // Add the new data to the object
        const newData = {
            name,
            attendance,
            message,
            created_at: isoDateWithMilliseconds
        };
        objectData.push(newData);

        // Convert the object back to a JSON string
        const updatedData = JSON.stringify(objectData);

        // Write the updated data to the JSON file
        await fsPromises.writeFile(dataFilePath, updatedData);

        // Send a success response
        return Response.json({
            message: 'Data stored successfully',
            data: newData
        });
    } catch (error) {
        console.error(error);
        // Send an error response
        return Response.json({ message: 'Error storing data' });
    }
}