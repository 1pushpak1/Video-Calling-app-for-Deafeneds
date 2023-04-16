import "./App.css";

const Navbar = () => {
	return (
		<div className="nav">
			<nav className="relative px-8 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
				<a
					className="text-3xl font-bold leading-none flex items-center space-x-4"
					href="#top"
				>
					<span className=" text-te hover:text-gray-100 text-xl">
						TechnoCrats
					</span>
				</a>
				<div className="lg:hidden">
					<button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
						<svg
							className="block h-4 w-4 fill-current"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<ul className="hidden lg:flex lg:items-center lg:justify-end grow mr-4">
				<li className="mr-4">
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-100 px-4 py-2"
							href="https://github.com/1pushpak1/Video-Calling-app-for-Deafeneds"
						>
						<div className="flex">
							<p className="pt-1.5 pr-2">Github</p>
							<svg className="icon github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
							</div></a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-100 px-4 py-2"
							href="https://drive.google.com/file/d/1xo7RbIZW9gg_rnmAkkpgo9YwkrmTmX6h/view?usp=share_link"
						>
						<div className="flex">
							<p className="pt-1.5 pr-2">Video Demo</p>
							<svg className="icon github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg></div></a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-100 px-4 py-2"
							href="#home"
						>
							Abstract
						</a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
							href="#problem"
						>
							Problem
						</a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
							href="#solution"
						>
							Our Solution
						</a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
							href="#adv"
						>
							Advantages
						</a>
					</li>
					<li>
						<a
							className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
							href="#stack"
						>
							Tech Stack
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

const Abstract = () => {
	return (
		<section id="home" className="bgrnd layer2 pt-48">
			<div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-5xl dark:text-white mb-4">
					What Inspired Us To Do This ?
				</h2>

				<p className="block max-w-4xl mt-4 text-2xl text-gray-500 dark:text-gray-300">
					Real-time Captioning is a revolutionary project that aims to bridge
					the communication gap between the deaf and hard of hearing community
					and the hearing world. This aims to convert hand gestures into
					real-time captions during live video conferences, allowing for
					seamless communication and inclusion.
				</p>
			</div>
		</section>
	);
};

const Problem = () => {
	return (
		<section
			id="problem"
			className="py-4 lg:flex lg:justify-center bgrnd layer3"
		>
			
				

				<div className="max-w-xl ml-12 px-6  lg:max-w-5xl lg:w-1/2">
					<h2 className="text-5xl font-semibold text-gray-800 dark:text-white ">
						The Problem
					</h2>

					<p className="mt-6 text-2xl dark:text-gray-300">
					Communication between deaf and hard of hearing people and hearing people is often hindered by the lack of a common language.</p>
					<p className="mt-6 text-2xl dark:text-gray-300"> Many deaf and hard of hearing people use sign language as their primary means of communication, but not everyone is fluent in sign language.</p>
					<p className="mt-6 text-2xl dark:text-gray-300"> This can create barriers during live video conferences, which are increasingly common in various settings such as education, work, and social interactions. These barriers can lead to exclusion, misunderstanding, and frustration for both parties.</p>

					<p className="mt-6 text-2xl dark:text-gray-300">Our project aims to bridge this communication gap by providing real-time captioning for sign language during live video conferences.
					</p>
				</div>
			
		</section>
	);
};
const Solution = () => {
	return (
		<section id="solution" className="bgrnd layer1 pt-8">
			<div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-5xl dark:text-white mb-4">
					Solution Suggested
				</h2>

				<p className="block max-w-4xl mt-4 text-2xl text-gray-500 dark:text-gray-300">
				We will use Python and machine learning techniques to train a model that can recognize and interpret hand gestures in real-time. We will also use Flutter, React, and NodeJS to build a cross-platform mobile and web application that can generate captions from sign language and vice versa. Our project will enable seamless communication and inclusion for deaf and hard of hearing people and hearing people during live video conferences.
				</p>
				<p className="block max-w-4xl mt-4 text-2xl text-gray-500 dark:text-gray-300">
				We will evaluate our project by testing its accuracy, speed, usability, and user satisfaction. We will also compare our project with existing solutions such as interpreters or transcription services. Our project will contribute to the fields of computer vision, machine learning, and accessibility.
				</p>
			</div>
		</section>
	);
};
const Advantages = () => {
	return (
		<section
			id="adv"
			className="max-w-full mx-auto px-10 md:px-0 py-10 bgrnd layer4"
		>
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-16 ">
				<div className="max-w-2xl mx-auto lg:text-center pt-16">
					<h2 className="text-5xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
						Advantages
					</h2>
				</div>
				<div className="max-w-3xl mx-auto mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
						Improved communication and understanding
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-400 mt-6">
						It improves communication and understanding between deaf and hard of hearing people and hearing people during live video conferences.
						</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
						Inclusion and accessibility
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-400 mt-6">
						It promotes inclusion and accessibility for deaf and hard of hearing people by providing them with a voice and a tool to participate in various settings such as education, work, and social interactions.
						</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
						Reduced need for intermediaries
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-400 mt-6">
						It reduces the need for interpreters or transcription services, which can be costly, scarce, or unavailable.
						</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
						Flexibility and spontaneity
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-400 mt-6">
						It allows for more flexibility and spontaneity in the presentation, as the speaker does not have to stick to a script or pre-recorded video.
						</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
						Enhanced learning and retention
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-400 mt-6">
						It enhances the learning and retention of information by providing both visual and auditory cues.</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
						Language diversity
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-400 mt-6">
						It benefits people who are not fluent in sign language or the spoken language of the presentation, as they can read the captions in their preferred language.</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
						Noise adaptation
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-400 mt-6">
						It helps people who are viewing the presentation in a noisy or noiseless environment, as they can adjust the volume or mute the audio without missing any information.</p>
					</div>
					<div>
						<h2 className="font-semibold text-3xl text-black dark:text-white">
						Empowerment
						</h2>
						<p className="text-lg leading-6 tracking-wide text-gray-400 mt-6">
						It will empower the deaf and hard of hearing community by providing
						them with a tool to communicate more effectively with the hearing
						world.</p>
					</div>
				</div>
				
			</div>
		</section>
	);
};

const Stack = () => {
	return (
		<section id="stack" className="py-10 sm:py-16 lg:py-24 bgrnd layer5">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-xl mx-auto text-center">
					<h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
						Tech Stack
					</h2>
				</div>

				<div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
					<div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
						<div className="flex items-start">
							<div className="ml-5">
								<h3 className="text-3xl font-semibold text-black dark:text-white">
									Python
								</h3>
								<p className="mt-3 text-lg  text-gray-600 dark:text-gray-300">
									For building and training ML Model for conversion of sign
									language to text.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="ml-5">
								<h3 className="text-3xl font-semibold text-black dark:text-white">
									Flutter
								</h3>
								<p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
									For a Cross-Platform Mobile Application both in Android & iOS.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="ml-5">
								<h3 className="text-3xl font-semibold text-black dark:text-white">
									React & NodeJS
								</h3>
								<p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
									For Building and deploying the model on a webapp
								</p>
							</div>
						</div>
					</div>

					<div className="lg:col-span-3">
						<img
							className="w-full rounded-lg shadow-xl"
							src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
const Footer = () => {
	return (
		<section className="py-10 nav">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-5xl l font-bold text-gray-800 dark:text-gray-300">
						Our Team
					</h2>
				</div>

				<div className="mt-12 max-w-4xl mx-auto flex items-center justify-center flex-wrap">
				<a href="https://www.linkedin.com/in/adityagupta11219/">
					<div className="dark:bg-gray-300 rounded-md h-20 w-48 my-4 mx-4 flex ">
						<h3 className="text-3xl font-semibold text-black mt-5 mx-6">
							Aditya
						</h3>
						<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
					</div>
					</a>
					<a href="https://www.linkedin.com/in/yatharth-gautam-a01802210/">
					<div className="dark:bg-gray-300 rounded-md h-20 w-48 my-4 mx-4 flex">
						<h3 className="text-3xl font-semibold text-black mt-5 mx-4">
							Yatharth
						</h3>
						<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
					
					</div>
					</a>
					<a href="https://www.linkedin.com/in/harshgupta940/">
					<div className="dark:bg-gray-300 rounded-md h-20 w-48 my-4 mx-4 flex">
						<h3 className="text-3xl font-semibold text-black mt-5 mx-6">
							Harsh
						</h3>
						<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
					
					</div>
					</a>
					<a href="https://www.linkedin.com/in/pushpak-kumawat-b4bb921ba/">
					<div className="dark:bg-gray-300 rounded-md h-20 w-48 my-4 mx-4 flex">
						<h3 className="text-3xl font-semibold text-black mt-5 mx-4 ">
							Pushpak
						</h3>
						<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
					
					</div>
					</a>
				</div>
			</div>
		</section>
	);
};

function App() {
	return (
		<div className="App ">
			<Navbar />
			<Abstract />
			<Problem />
			<Solution />
			<Advantages />
			<Stack />
			<Footer/>
		</div>
	);
}

export default App;
