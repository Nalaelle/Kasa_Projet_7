import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;
        setLoading(true);
        async function fetchData() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                // console.log("roooo log du fetch ", data);
                setData(data);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
                // console.log("finally du fetch be or not to be");
            }
        }
        fetchData();
    }, [url]);

    return { isLoading, data, error };
}
