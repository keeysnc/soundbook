import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
let data = require("../data/posts.json");

gsap.registerPlugin(ScrollTrigger);

const BlogPost = () => {
	const { path } = useParams();

	useEffect(() => {
		console.log("Path parameter:", path);
	}, []);

	const blogPost = data.find((post) => post.path === path);

	if (!blogPost) {
		return <p className="text-center text-xl text-gray-500">Blog post not found.</p>;
	}

	return (
		<div className="max-w-3xl mx-auto px-5 py-8 text-gray-800 leading-relaxed font-serif">
			<h1 className="text-4xl font-bold mb-2 leading-tight">{blogPost.title}</h1>
			<p className="text-gray-500 text-lg italic mb-4">{blogPost.category}</p>
			<img src={blogPost.imgUrl} alt={blogPost.title} className="w-full h-auto my-6 " />
			<p className="text-gray-600  mb-4 px-4">{blogPost.caption}</p>
			<div className="text-lg text-gray-700 space-y-6">{blogPost.content}</div>
		</div>
	);
};

export default BlogPost;
