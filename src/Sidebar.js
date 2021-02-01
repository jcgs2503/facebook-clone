import { ExpandMoreOutlined, LocalHospital } from "@material-ui/icons";
import userEvent from "@testing-library/user-event";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibaryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarRow
				src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI="
				title="Jerry Chang"
			/>
			<SidebarRow
				Icon={LocalHospitalIcon}
				title="COVID-19 Information Center"
			/>

			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleIcon} title="Friends" />
			<SidebarRow Icon={ChatIcon} title="Messenger" />
			<SidebarRow Icon={StorefrontIcon} title="Narketplace" />
			<SidebarRow Icon={VideoLibaryIcon} title="Videos" />
			<SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
		</div>
	);
}

export default Sidebar;
