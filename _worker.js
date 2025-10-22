

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    let url = new URL(request.url);
    url.hostname = 'thptucirrhes.ap-southeast-1.clawcloudrun.com'; 
    let upstream = new Request(url, request);
    return fetch(upstream);
}
