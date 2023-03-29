import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
            <div className="flex space-x-2 items-center">
                <Image
                    src="/assets/AIArtLogo.PNG"
                    alt="AI Image Generator"
                    width={128}
                    height={177}
                />

                <div>
                    <h1 className="font-bold">
                        <span className="text-blue-500">AI</span> Image Generator
                    </h1>
                    <h2 className="text-xs">
                        Powered by DALL-E 2, ChatGPT and Microsoft Azure!
                    </h2>
                </div>

            </div>
            <div className="flex divide-x text-gray-500 items-center text-xs md:text-base">
                <Link
                    href="https://github.com/Code4Wyatt?tab=repositories"
                    className="px-2 font-light text-right"
                >
                    View My GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/pauljamurray/"
                    className="px-2 font-light"
                >
                    LinkedIn
                </Link>
            </div>
        </header>
    );
}

export default Header;
