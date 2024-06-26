// @ts-nocheck

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Link } from "@/navigation";
import type { pathnames } from "@/config";
import type { Media } from "@/payload-types";

type PageLink = { label: string; link: keyof typeof pathnames };

type Props = {
	heading: string;
	description?: string;
	subheading?: string | PageLink;
	image?: string | Media;
	cta?: PageLink;
};

const Subheading: React.FC<{ content?: string | PageLink }> = ({ content }) => {
	if (!content) return null;

	if (typeof content === "string") return <p>{content}</p>;

	return (
		<Link
			href={content.link}
			className="btn btn-sm btn-outline btn-secondary mx-4"
		>
			{content.label}
			<ArrowUpRight className="size-4" />
		</Link>
	);
};

const Hero: React.FC<Props> = ({
	heading,
	description,
	subheading,
	image,
	cta,
}) => {
	return (
		<div className="min-h-[60vh] lg:min-h-[70vh] bg-primary flex flex-col justify-center relative">
			{image ? (
				<div className="absolute top-0 w-full h-full overflow-hidden brightness-50">
					{typeof image === "string" ? (
						<Image
							src={image}
							alt={heading}
							width={4096}
							height={4096}
							className="w-full h-full object-cover"
						/>
					) : (
						<Image
							src={image.url}
							alt={heading}
							width={4096}
							height={4096}
							className="w-full h-full object-cover"
						/>
					)}
				</div>
			) : (
				<div className="absolute top-0 w-full overflow-hidden brightness-50">
					<Image
						src="/placeholder.jpg"
						width={4096}
						height={4096}
						className="w-full object-cover h-full"
					/>
				</div>
			)}
			<div className="container z-10 py-24 px-8">
				<Subheading content={subheading} />
				<div className="flex flex-col lg:flex-row gap-4">
					<div className="w-full lg:w-1/2 p-4 space-y-8">
						<div className="space-y-1">
							<h1 className="text-2xl lg:text-5xl text-base-100 font-bold">
								{heading}
							</h1>
							{description && (
								<div className="w-full">
									<p className="text-base lg:text-lg text-base-200">
										{description}
									</p>
								</div>
							)}
						</div>
						{cta && (
							<Link href={cta.link} className="btn btn-primary w-48">
								{cta.label}
								<ArrowUpRight className="size-4" />
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
