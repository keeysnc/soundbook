import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HalfLayout from "../Layouts/HalfLayout";
import { blogCardStyles } from "./blogCardStyles";
import gsap from "gsap";

const BlogCard = ({ ...props }) => {
	// Create refs for each part of the component
	const containerRef = useRef(null);
	const imageRef = useRef(null);
	const textRef = useRef(null);
	const titleRef = useRef(null);
	const captionRef = useRef(null);

	useEffect(() => {
		// Fade up the entire container
		gsap.fromTo(containerRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 });

		// Animate each child element with staggered delays
		gsap.fromTo(imageRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 });

		gsap.fromTo(
			[textRef.current, titleRef.current, captionRef.current],
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 1, stagger: 0.3, delay: 0.4 }
		);
	}, []);

	return (
		<Link to={`/blog/${props.path}`} className={blogCardStyles.blogcard_link}>
			<div className={blogCardStyles.blogcard_container} ref={containerRef}>
				<HalfLayout>
					<img alt={props.title} className={blogCardStyles.blogcard_img} src={props.imgUrl} ref={imageRef} />
				</HalfLayout>
				<HalfLayout>
					<p className="text-gray-600 italic" ref={textRef}>
						{props.category}
					</p>
					<h1 className={blogCardStyles.blogcard_title} ref={titleRef}>
						{props.title}
					</h1>
					<p ref={captionRef}>{props.caption}</p>
				</HalfLayout>
			</div>
		</Link>
	);
};

export default BlogCard;
