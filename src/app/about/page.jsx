import Link from "next/link";

export default function About() {
    return (
        <div>
            <p>
                <Link href="/" >
                    Back to home
                </Link>
                </p>
            This is the about page content
        </div>
    );
}