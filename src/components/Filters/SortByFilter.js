import React, { useEffect, useState } from "react";
import { menuArrow } from "../../assets/Icons";
import { filterStyles } from "./filterStyles";

const SortByFilter = () => {
	const filterOptions = ["Newest", "Oldest", "Pricing Ascending", "Pricing Desceding", "A-Z", "Z-A"];
	const [openDropdown, setOpenDropdown] = useState(false);
	const [select, setSelect] = useState("Newest");

	const handleSort = (e) => {
		e.preventDefault();
		const selectOption = e.target.innerText;
		handleToggleMenu();
		setSelect(selectOption);
	};

	const handleDisplayOption = () => {
		const defaultOption = filterOptions[0];
		setSelect(defaultOption);
	};

	const handleToggleMenu = () => {
		setOpenDropdown(!openDropdown);
	};

	useEffect(() => {
		handleDisplayOption();
	}, []);

	const options = filterOptions.map((option, key) =>
		option !== select ? (
			<li
				onClick={handleSort}
				key={key}
				name={option}
				value={option}
				className={key === 5 ? `option-${key} p-2 ${filterStyles.sort_filter.option}` : ` option-${key} p-2 ${filterStyles.sort_filter.option}`}
			>
				{option}
			</li>
		) : null
	);

	return (
		<div className="sort-filter flex pt-4">
			<p className="font-bold pb-6">SORT BY:</p>
			<label for="sortFilter"></label>
			<div class="sort-filter">
				<div onClick={handleToggleMenu} className="flex px-4 cursor-pointer">
					<p>
						{select}
						<span className="px-6">▼</span>
					</p>
					{/* <span className="px-4 py-1" onClick={handleToggleMenu}>
						{menuArrow()}
					</span> */}
				</div>

				<ul id="sort-dropdown" className={`${openDropdown ? `border  flex flex-col absolute z-10 bg-white` : `hidden`} `}>
					{options}
				</ul>
			</div>
		</div>
	);
};

export default SortByFilter;
