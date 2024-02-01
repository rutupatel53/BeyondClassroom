export const getTest = async () => {
  try {
    const res = await fetch("http://localhost:5000/test", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    return await res.json();
  } catch (err) {}
};
