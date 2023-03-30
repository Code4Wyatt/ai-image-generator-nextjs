export async function GET(request: Request) {
  // Connect to Microsoft Azure Endpoint

  // Add logic for local host for dev, hosted route for production
  const response = await fetch("https://aiimagegeneratorapp.azurewebsites.net/api/getchatgptsuggestion", { cache: "no-store" });

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), { status: 200 });
}
