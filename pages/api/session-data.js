export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log('post method received')
        // Process a POST request
        res.status(200).json({ ServerSays: 'Request Received' })
    } else {
        console.log('some other method received')
        // Handle any other HTTP method
        res.status(500).json({
            error: 'Sorry you can only post to this endpoint',
        })
    }
}
