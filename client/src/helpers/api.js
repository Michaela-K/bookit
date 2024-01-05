
export async function sendApiRequest(url, method, data = null) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const requestOptions = {
      method,
      headers,
      body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(url, requestOptions);
    console.log("api response", response)

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const responseData = await response.json();
    console.log("api responseData", responseData)
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}