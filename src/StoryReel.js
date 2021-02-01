import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cGVyc29ufHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"
				title="hi"
				image="https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting.jpg"
			/>
		</div>
	);
}

export default StoryReel;
