import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), './api/guestData.json');


export async function GET() {
    try {
        // Read the existing data from the JSON file
        const jsonData: any = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);

        return Response.json(objectData);
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Error fetching data' });
    }
}
