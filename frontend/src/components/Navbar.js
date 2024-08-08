import { React } from "react";

// TODO: Figure out better way to handle this...
const data_uri =
	"data:image/png;base64,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";

function Navbar() {
	return (
		<header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
			<nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
				<div class="flex items-center justify-between">
					<a
						class="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
						href=""
						aria-label="Kalvin">
						<span class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
							<img
								class="w-10 h-auto"
								src={data_uri}
								alt="Logo"
							/>
							Kalvin
						</span>
					</a>
					<div class="sm:hidden">
						<button
							type="button"
							class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
							id="hs-navbar-example-collapse"
							aria-expanded="false"
							aria-controls="hs-navbar-example"
							aria-label="Toggle navigation"
							data-hs-collapse="#hs-navbar-example">
							<svg
								class="hs-collapse-open:hidden shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<line
									x1="3"
									x2="21"
									y1="6"
									y2="6"
								/>
								<line
									x1="3"
									x2="21"
									y1="12"
									y2="12"
								/>
								<line
									x1="3"
									x2="21"
									y1="18"
									y2="18"
								/>
							</svg>
							<svg
								class="hs-collapse-open:block hidden shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="M18 6 6 18" />
								<path d="m6 6 12 12" />
							</svg>
							<span class="sr-only">Toggle navigation</span>
						</button>
					</div>
				</div>
				<div
					id="hs-navbar-example"
					class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
					aria-labelledby="hs-navbar-example-collapse">
					<div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
						<a
							class="font-medium text-blue-500 focus:outline-none"
							href=""
							aria-current="page">
							Home
						</a>
						<a
							class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
							href="tracker">
							Tracker
						</a>
						<a
							class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
							href="todo">
							To-Do
						</a>
						<a
							class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
							href="character">
							Character
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
