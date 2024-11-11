import React, { useEffect, useRef } from "react";
import { getPosts } from "../utils/utils";
import BlogCard from "../components/Blog/BlogCard";
import Video2 from "../components/Video/Video2";
import gsap from "gsap";

const Blog = () => {
	const posts = getPosts();

	// Refs to target elements for animation
	const blogContentRef = useRef(null);
	const videoRefs = useRef([]);
	const titleRef = useRef(null);
	const paragraphRef = useRef(null);

	useEffect(() => {
		// Fade in everything with no stagger
		gsap.fromTo(
			blogContentRef.current.children,
			{ opacity: 0, y: 20 }, // Start with opacity 0 and slightly below
			{ opacity: 1, y: 0, duration: 1 } // Fade in with no delay or stagger
		);

		// Fade in the video elements
		gsap.fromTo(videoRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });

		// Fade in title and paragraph
		gsap.fromTo([titleRef.current, paragraphRef.current], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
	}, [posts]);

	const mapPostsCards = posts.map((post) => (
		<BlogCard
			key={post.id}
			imgUrl={post.imgUrl}
			path={post.path}
			category={post.category}
			caption={post.caption}
			feature={post.figure}
			title={post.title}
		/>
	));

	return (
		<>
			<div className="gridLines grid pb-15 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 " ref={blogContentRef}>
				<div className="col-span-1"></div>
				<div ref={(el) => videoRefs.current.push(el)}>
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="col-span-1 text-center pt-48" ref={titleRef}>
					<h1 className="gridCircle">A Sound Community</h1>
				</div>
				<div className="col-span-2"></div>
				<div className="col-span-1" ref={(el) => videoRefs.current.push(el)}>
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="col-span-1" ref={(el) => videoRefs.current.push(el)}>
					<Video2 src="./lookbookVideo2.mp4" />
				</div>
				<div className="sm:px-8 md:px-20 col-span-2" ref={paragraphRef}>
					<h1>"Harnessing the Power of Audio to Elevate Your Mind and Spirit"</h1>
					<p className="p-2">
						Sound has a remarkable ability to uplift and energize, influencing our emotions, mindset, and overall well-being. Whether it’s the calming
						effect of soft, ambient music, the invigorating rhythm of upbeat tunes, or the peaceful serenity of nature sounds, the right audio can
						transform your mood and boost mental clarity. By incorporating soothing sounds into your daily routine, you can reduce stress, improve
						focus, and create an environment that promotes both relaxation and productivity. The power of sound isn’t just in its ability to
						entertain; it can be a tool for self-care and mental rejuvenation, providing a sense of balance and harmony that positively impacts your
						mind, body, and soul.
					</p>
				</div>
				<div className="col-span-3"></div>
			</div>

			<div className="m-auto">
				<div className="gridLines grid pb-15 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">{mapPostsCards}</div>
			</div>
		</>
	);
};

export default Blog;
