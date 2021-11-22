export async function getSentryObject() {
    let response = await fetch("​https://api.nasa.gov/sentry/rest/v1/sentry/browse?api_key=DEMO_KEY")
    let result = response.json()
    return result["sentry_objects"]
}