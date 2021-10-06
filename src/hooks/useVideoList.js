import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function fetchVideos() {
			// db works
			const db = getDatabase();
			const videosRef = ref(db, "videos");
			const videosQuery = query(videosRef, orderByKey());

			try {
				setError(false);
				setLoading(true);
				// request firebase database
				const snapShot = await get(videosQuery);
				setLoading(false);
				if (snapShot.exists()) {
					setVideos((prevVideos) => {
						return [
							...prevVideos,
							...Object.values(snapShot.val()),
						];
					});
				} else {
					//pass
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}
		fetchVideos();
	}, []);

	return { loading, videos, error };
};

export default useVideoList;
