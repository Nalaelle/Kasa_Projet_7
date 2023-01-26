import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        async function fetchData() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.log(error);
                setError(true);
            }
        }
        fetchData();
    }, [url, error]);

    return { data };
}
