export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      let response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        return env.ASSETS.fetch(new Request(new URL('/', url), request));
      }
      return response;
    } catch (e) {
      return env.ASSETS.fetch(new Request(new URL('/', url), request));
    }
  }
}
