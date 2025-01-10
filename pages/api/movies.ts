import { filterMovies } from '../../api/themoviedb/index';

export default async function handler(req, res) {
    console.log('Request Method:', req.method); 
    if (req.method === 'POST') {
        try {
            const { data } = req.body

            if (!data?.action)
                return res.status(400).json({ error: 'Missing Data Action and value' });

            const response = await filterMovies({data: data});
            const json = await response.json()
            const rest = json?.results ?? json
            
            return res.status(200).json({...rest});
        } catch (error) {
            console.log(error,'errr')
            return res.status(500).json({ a:error, error: 'Error fetching data TMDB' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}