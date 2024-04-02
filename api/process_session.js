export default function handleSession(request, response) {
    console.log('request is', request)
    response.status(200).json({
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    })
}
